/* global cast, chrome -- set by the Cast sender library and Chrome */
import { writable } from 'svelte/store';

// Google's Cast sender library (Chrome only), shared by the Play on TV button and the remote
// panel under the video. The TV fetches the video itself, straight from R2, so the laptop or
// phone is only a remote.

export type CastStatus = {
	available: boolean; // a Cast device is on the network
	contentId: string | null; // what the TV is playing, while connected
	device: string;
	paused: boolean;
	current: number;
	duration: number;
};

export const castStatus = writable<CastStatus>({
	available: false,
	contentId: null,
	device: '',
	paused: false,
	current: 0,
	duration: 0
});

const SDK = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';

let started = false;
let player: cast.framework.RemotePlayer | undefined;
let controller: cast.framework.RemotePlayerController | undefined;

export function initCast() {
	if (started || !('chrome' in window)) return; // not Chrome: don't load the library
	started = true;
	if (window.cast?.framework) {
		setup();
		return;
	}
	window.__onGCastApiAvailable = (ok) => {
		if (ok) setup();
	};
	const script = document.createElement('script');
	script.src = SDK;
	document.head.append(script);
}

function setup() {
	const { CastContext, CastContextEventType, CastState, RemotePlayer, RemotePlayerController } =
		cast.framework;
	const context = CastContext.getInstance();
	context.setOptions({
		receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
		autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
	});

	const remote = new RemotePlayer();
	const remoteController = new RemotePlayerController(remote);
	const update = () =>
		castStatus.set({
			available: context.getCastState() !== CastState.NO_DEVICES_AVAILABLE,
			contentId: remote.isConnected ? (remote.mediaInfo?.contentId ?? null) : null,
			device: context.getCurrentSession()?.getCastDevice().friendlyName ?? 'the TV',
			paused: remote.isPaused,
			current: remote.currentTime,
			duration: remote.duration
		});
	context.addEventListener(CastContextEventType.CAST_STATE_CHANGED, update);
	remoteController.addEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, update);
	update();
	player = remote;
	controller = remoteController;
}

export async function playOnTv(src: string, title: string, poster: string | null, startAt = 0) {
	const context = cast.framework.CastContext.getInstance();
	if (!context.getCurrentSession()) {
		try {
			await context.requestSession(); // Chrome's device picker
		} catch {
			return; // picker closed
		}
	}
	const session = context.getCurrentSession();
	if (!session) return;

	const info = new chrome.cast.media.MediaInfo(src, 'video/mp4');
	const metadata = new chrome.cast.media.GenericMediaMetadata();
	metadata.title = title;
	if (poster) metadata.images = [new chrome.cast.Image(poster)];
	info.metadata = metadata;

	const request = new chrome.cast.media.LoadRequest(info);
	request.currentTime = startAt;
	await session.loadMedia(request);
}

export function playOrPause() {
	controller?.playOrPause();
}

export function seekTo(seconds: number) {
	if (!player || !controller) return;
	player.currentTime = Math.min(Math.max(seconds, 0), player.duration);
	controller.seek();
}

export function skip(seconds: number) {
	if (player) seekTo(player.currentTime + seconds);
}

export function stopCasting() {
	cast.framework.CastContext.getInstance().endCurrentSession(true);
}
