<script>
  const items = [
    { date: "01.03", title: "Anna Karenina", type: "book" },
    { date: "01.04", title: "Before Sunrise", type: "movie" },
    { date: "01.08", title: "Before Sunset", type: "movie" },
    { date: "01.10", title: "Before Midnight", type: "movie" },
    { date: "01.11", title: "Brahm's Violin Concerto", type: "concert" },
    { date: "01.11", title: "Romeo and Juliet", type: "book" },
    { date: "01.18", title: "Severance", type: "tv" },
    { date: "01.24", title: "Severance", type: "tv" },
    { date: "01.31", title: "Severance", type: "tv" },
    { date: "02.01", title: "Reich's The Desert Music, Stravinsky's The Rite of Spring", type: "concert" },
    { date: "02.06", title: "Severance", type: "tv" },
    { date: "02.13", title: "Severance", type: "tv" },
    { date: "02.20", title: "Severance", type: "tv" },
    { date: "02.22", title: "Pride and Prejudice", type: "book" },
    { date: "02.22", title: "Solaris", type: "book" },
    { date: "02.24", title: "MJ Lenderman w/ Wild Pink", type: "concert" },
    { date: "02.27", title: "Severance", type: "tv" },
    { date: "03.02", title: "The Truman Show", type: "movie" },
    { date: "03.06", title: "Severance", type: "tv" },
    { date: "03.08", title: "The Master", type: "movie" },
    { date: "03.09", title: "The Great Gatsby", type: "book" },
    { date: "03.13", title: "The French Dispatch", type: "movie" },
    { date: "03.16", title: "Severance", type: "tv" },
    { date: "03.17", title: "The Five Types of Wealth", type: "book" },
    { date: "03.18", title: "A Midsummer Night's Dream", type: "book" },
    { date: "03.19", title: "The Savage Detectives", type: "book" },
    { date: "03.20", title: "Severance", type: "tv" },
    { date: "03.22", title: "The Day The Earth Blew Up: A Looney Tunes Movie", type: "movie" },
    { date: "03.28", title: "Who's Afraid of Virginia Woolf?", type: "movie" },
    { date: "04.01", title: "The Adventures of Huckleberry Finn", type: "book" },
    { date: "04.02", title: "Faust, Pt. 1", type: "book" },
    { date: "04.29", title: "The Scarlet Letter", type: "book" },
    { date: "06.16", title: "Angels in America (audiobook)", type: "book" },
    { date: "06.20", title: "Angels in America (film)", type: "movie" },
    { date: "07.10", title: "Conversations — Steve Reich", type: "book" },
    { date: "07.15", title: "The Art of Gathering", type: "book" },
    { date: "08.16", title: "The Mysterious Stranger", type: "book" },
  ];
</script>

<div class="section-label">logbook — 2025</div>

<div class="log-layout">
  <div class="log-content">
    <ul class="item-list">
      {#each items as item}
        <li class="item">
          <span class="date">{item.date}</span>
          <span class="title {item.type}">
            {item.title}
          </span>
        </li>
      {/each}
    </ul>
  </div>

  <aside class="music-aside">
    <div class="aside-label">2025 playlist</div>
    <iframe
      title="2025 Favorite Tracks Apple Music Playlist"
      allow="autoplay *; encrypted-media *;"
      height="450"
      style="width:100%;overflow:hidden;background:transparent;"
      src="https://embed.music.apple.com/us/playlist/2025-favorite-tracks/pl.u-76oNkLNsvqz51B?theme=light&ls=1&app=music&itsct=music_box_player&itscg=30200"
    ></iframe>
  </aside>
</div>

<style>
  .log-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
    align-items: start;
    margin-top: 1.5rem;
  }

  .item-list {
    list-style: none;
  }

  .item {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 1.25rem;
    padding: 0.6rem 0;
    border-bottom: 1px dotted var(--text-dim);
    align-items: baseline;
    font-size: 0.78rem;
  }

  .item:first-child {
    border-top: 1px dotted var(--text-dim);
  }

  .date {
    font-size: 0.65rem;
    color: var(--text-dim);
    flex-shrink: 0;
    letter-spacing: 0.04em;
  }

  .title { display: inline; }
  .title.book { text-decoration: underline; text-decoration-color: var(--text-dim); text-underline-offset: 3px; }
  .title.movie { font-style: italic; }
  .title.tv { font-weight: 700; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-dim); }
  .title.concert { color: var(--link); }

  .music-aside {
    position: sticky;
    top: 2rem;
    border: 2px dashed var(--purple);
    box-shadow: 3px 3px 0 var(--purple);
    background: rgba(108, 75, 255, 0.04);
    overflow: hidden;
  }

  .aside-label {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-dim);
    padding: 0.6rem 1rem;
    border-bottom: 1px dotted var(--text-dim);
  }

  @media (max-width: 768px) {
    .log-layout {
      grid-template-columns: 1fr;
    }

    .music-aside {
      position: static;
    }
  }
</style>
