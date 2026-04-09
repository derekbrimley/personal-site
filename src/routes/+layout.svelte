<script>
  import '$lib/styles/global.css';
  import Header from './Header.svelte';
  import { page } from '$app/stores';

  /** @type {Record<string, string>} */
  const sideLabels = {
    '/': 'Home / Resume',
    '/projects': 'Projects',

  };

  $: sideLabel = sideLabels[$page.url.pathname] ?? 'Derek Brimley';
</script>

<div class="page-outer">
  <Header />
  <div class="main-wrapper">
    <div class="main-content">
      <slot />
    </div>
    <div class="side-label" aria-hidden="true">{sideLabel}</div>
  </div>
  <footer class="site-footer">
    <div class="footer-links">
      <a class="footer-link" href="/projects">projects</a>
      <a class="footer-link" href="/notes" data-sveltekit-reload>notes</a>
    </div>
    <div class="socials">
      <a class="social-link" href="https://github.com/derekbrimley" target="_blank" rel="noopener noreferrer">github</a>
      <a class="social-link" href="https://www.linkedin.com/in/derekbrimley/" target="_blank" rel="noopener noreferrer">linkedin</a>
    </div>
    <span class="footer-copy">© 2026 Derek Brimley</span>
  </footer>
</div>

<style>
  .page-outer {
    position: relative;
    z-index: 1;
    max-width: 1060px;
    margin: 2rem auto;
    border: 2px solid var(--border);
    box-shadow: 5px 5px 0 var(--shadow);
    min-height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
  }

  .main-wrapper {
    display: grid;
    grid-template-columns: 1fr 36px;
    flex: 1;
  }

  .main-content {
    padding: 2rem;
    border-right: 2px solid var(--border);
  }

  .side-label {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--text-dim);
    padding: 1rem 0;
    user-select: none;
  }

  .site-footer {
    border-top: 2px solid var(--border);
    padding: 0.85rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-links {
    display: flex;
  }

  .footer-link {
    font-size: 0.65rem;
    color: var(--link);
    text-decoration: none;
    padding: 0.2rem 0.7rem;
    border-right: 1px dotted var(--text-dim);
    letter-spacing: 0.04em;
  }

  .footer-link:first-child {
    border-left: 1px dotted var(--text-dim);
  }

  .footer-link:hover {
    text-decoration: underline;
  }

  .footer-copy {
    font-size: 0.6rem;
    color: var(--text-dim);
    letter-spacing: 0.06em;
  }

  .socials {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .social-link {
    font-size: 0.62rem;
    text-decoration: none;
    color: var(--link);
    border: 1px dashed var(--text-dim);
    padding: 0.15rem 0.45rem;
    letter-spacing: 0.06em;
    transition: border-color var(--transition-fast);
    white-space: nowrap;
  }

  .social-link::before {
    content: '○ ';
    color: var(--text-dim);
    font-size: 0.55rem;
  }

  .social-link:hover {
    border-color: var(--border);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .page-outer {
      margin: 0;
      border-left: none;
      border-right: none;
      box-shadow: none;
      min-height: 100vh;
    }

    .main-wrapper {
      grid-template-columns: 1fr;
    }

    .side-label {
      display: none;
    }

    .main-content {
      border-right: none;
      padding: 1.5rem 1rem;
    }
  }
</style>
