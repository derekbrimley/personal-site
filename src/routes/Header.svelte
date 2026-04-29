<header class="site-header">
  <nav class="header-nav">
    <a class="nav-item" href="/">About</a>
    <a class="nav-item" href="/projects">Projects</a>
    <a class="nav-item" href="/notes">Notes</a>
  </nav>
  <div class="header-identity">
    <div class="ascii-banner">
      <pre class="ascii-name">
      <span class="coral">██████╗</span> <span class="purple">███████╗</span><span class="green">██████╗</span> <span class="yellow">███████╗</span><span class="pink">██╗  ██╗</span>
      <span class="coral">██╔══██╗</span><span class="purple">██╔════╝</span><span class="green">██╔══██╗</span><span class="yellow">██╔════╝</span><span class="pink">██║ ██╔╝</span>
      <span class="coral">██║  ██║</span><span class="purple">█████╗  </span><span class="green">██████╔╝</span><span class="yellow">█████╗  </span><span class="pink">█████╔╝</span>
      <span class="coral">██║  ██║</span><span class="purple">██╔══╝  </span><span class="green">██╔══██╗</span><span class="yellow">██╔══╝  </span><span class="pink">██╔═██╗</span>
      <span class="coral">██████╔╝</span><span class="purple">███████╗</span><span class="green">██║  ██║</span><span class="yellow">███████╗</span><span class="pink">██║  ██╗</span>
      <span class="yellow">██████╗ </span><span class="pink">██████╗ </span><span class="coral">██╗</span><span class="purple">███╗   ███╗</span><span class="green">██╗     </span><span class="coral">███████╗</span><span class="yellow">██╗   ██╗</span>
      <span class="yellow">██╔══██╗</span><span class="pink">██╔══██╗</span><span class="coral">██║</span><span class="purple">████╗ ████║</span><span class="green">██║     </span><span class="coral">██╔════╝</span><span class="yellow">╚██╗ ██╔╝</span>
      <span class="yellow">██████╔╝</span><span class="pink">██████╔╝</span><span class="coral">██║</span><span class="purple">██╔████╔██║</span><span class="green">██║     </span><span class="coral">█████╗  </span><span class="yellow"> ╚████╔╝ </span>
      <span class="yellow">██╔══██╗</span><span class="pink">██╔══██╗</span><span class="coral">██║</span><span class="purple">██║╚██╔╝██║</span><span class="green">██║     </span><span class="coral">██╔══╝  </span><span class="yellow">  ╚██╔╝  </span>
      <span class="yellow">██████╔╝</span><span class="pink">██║  ██║</span><span class="coral">██║</span><span class="purple">██║ ╚═╝ ██║</span><span class="green">███████╗</span><span class="coral">███████╗</span><span class="yellow">   ██║   </span>

      </pre>
      </div>
  </div>
</header>

<style>
  .coral {
    color: var(--coral)
  }
  .yellow {
    color: var(--yellow)
  }
  .purple {
    color: var(--purple)
  }
  .pink {
    color: var(--pink)
  }
  .green {
    color: var(--green)
  }
  
  .site-header {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid var(--border);
  }

  .header-nav {
    padding: 1rem 1.5rem;
    border-right: 2px solid var(--border);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .nav-item {
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: var(--link);
    padding: 0.25rem 0.7rem;
    border: 1px dashed transparent;
    transition: border-color var(--transition-fast), background var(--transition-fast);
    letter-spacing: 0.04em;
  }

  .nav-item:hover {
    border-color: var(--border);
    background: rgba(34, 34, 32, 0.04);
    text-decoration: none;
  }

  .nav-item + .nav-item {
    border-left: 1px dotted var(--text-dim);
  }

  .header-identity {
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 0.6rem;
    min-width: 200px;
  }

  @media (max-width: 600px) {
    .site-header {
      grid-template-columns: 1fr;
    }

    .header-nav {
      border-right: none;
    }

    .header-identity {
      align-items: flex-start;
      min-width: 0;
      padding: 0.75rem 1.5rem;
      border-top: 1px dotted var(--text-dim);
    }
  }
</style>
