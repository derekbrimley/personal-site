<!-- ABOUT -->
<div class="content-row">
  <div class="section-label">about</div>
  <div class="about-row">
    <div>
      <p class="about-bio">I'm a product manager at RainFocus, trying to stay focused on what matters.</p>
      <p class="about-bio">At home, I'm enjoying the ride with my wife and three kids.</p>
      <p class="about-bio">I'm interested in making things that enable a more intentional, satisfying, and beautiful life. </p>
    </div>
    <div class="about-meta">
      <div class="meta-row">
        <span class="meta-val">
          <a href="https://x.com/derekbrimley" target="_blank" rel="noopener noreferrer">twitter</a>
        </span>
      </div>
      <div class="meta-row">
        <span class="meta-val">
          <a href="https://github.com/derekbrimley" target="_blank" rel="noopener noreferrer">github</a>
        </span>
      </div>
      <div class="meta-row">
        <span class="meta-val">
          <a href="https://www.linkedin.com/in/derekbrimley/" target="_blank" rel="noopener noreferrer">linkedin</a>
        </span>
      </div>
    </div>
  </div>
</div>

<!-- WORK -->
<div class="content-row">
  <div class="section-label">work</div>
  <div class="work-row">
    <div class="work-block current">
      <span class="work-block-label">current</span>
      <div class="work-company">RainFocus</div>
      <div class="work-title">Principal Product Manager</div>
      <div class="work-dates">2022 — present</div>
      <div class="work-desc">
        <ul>
          <li>Made our dashboard and collaboration tools much easier to use.</li>
          <li>Reduced report timeouts by 85% and increased fast-loading reports by 15%.</li>
          <li>Built AI-powered product assistant and semantic search for reports.</li>
        </ul>
      </div>
    </div>
    <div class="work-block">
      <span class="work-block-label">previous</span>
      <div class="work-company">Forcepoint</div>
      <div class="work-title">Frontend Developer / Product Manager</div>
      <div class="work-dates">2018 — 2022</div>
      <div class="work-company">RoviTracker</div>
      <div class="work-title">Frontend Developer</div>
      <div class="work-dates">2017 — 2018</div>
      <div class="work-desc">

      </div>
    </div>
  </div>
</div>

<!-- EDUCATION -->
<div class="content-row">
  <div class="edu-row">
    <div class="edu-block">
      <div class="section-label">education</div>
      <div class="edu-school">Brigham Young University</div>
      <div class="edu-degree">B.S. Information Systems</div>
      <div class="edu-dates">2010 — 2017</div>
    </div>
    <div class="skills-block">
      <div class="section-label" style="margin-bottom: 0.75rem;">skills</div>
      <ul class="skills-list">
        <li>User research</li>
        <li>Data analytics</li>
        <li>Figma</li>
        <li>React / Javascript / Python</li>
        <li>Project management</li>
      </ul>
    </div>
    <div class="interests-block">
      <div class="section-label" style="margin-bottom: 0.75rem;">interests</div>
      <div class="skills-list">Effective altruism; piano; running; woodworking; baking; community building</div>
    </div>
  </div>
</div>

<!-- PROJECTS -->
<div class="content-row">
  <div class="section-label">recent projects</div>
  <div class="proj-row">
    <div class="proj-block">
      <a class="proj-name" href="https://piano-coach.app" target="_blank" rel="noopener noreferrer">Piano Coach</a>
      <p class="proj-desc">AI tool for learning piano technique.</p>
    </div>
    <div class="proj-block">
      <a class="proj-name" href="https://oblique-assistant.derek-brimley.com/" target="_blank" rel="noopener noreferrer">Oblique Assistant</a>
      <p class="proj-desc">Creative prompt generator. Eno-inspired.</p>
    </div>
  </div>
  <a class="all-projects-link" href="/projects">all projects →</a>
</div>

<!-- NOTES -->
<div class="content-row">
  <div class="section-label">notes / digital garden</div>
  <div class="log-row">
    <div class="log-aside">
      <div class="log-aside-title">thinking out loud</div>
      <p class="log-aside-sub">A collection of notes, ideas, and half-formed thoughts from my Obsidian vault.</p>
      <a class="log-more" href="/notes" data-sveltekit-reload>explore notes →</a>
    </div>
  </div>
</div>

<style>

  .content-row {
    border-bottom: 1px dotted var(--text-dim);
    padding: 2rem 0;
  }

  .content-row:last-child {
    border-bottom: none;
  }

  /* ABOUT */
  .about-row {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .about-bio {
    font-size: 0.82rem;
    line-height: 1.8;
    color: var(--text);
    margin-bottom: 4;
  }

  .about-meta {
    border: 2px dashed var(--teal);
    padding: 1rem 1.25rem;
    box-shadow: 3px 3px 0 var(--teal);
    background: rgba(0, 168, 150, 0.04);
  }

  .meta-row {
    text-align: center;
    padding: 0.3rem 0;
    font-size: 0.7rem;
  }

  .meta-row + .meta-row {
    border-top: 1px dotted var(--text-dim);
  }

  .meta-val { color: var(--text); font-weight: 700; }
  .meta-val a { color: var(--link); text-decoration: none; }
  .meta-val a:hover { text-decoration: underline; }

  /* WORK */
  .work-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .work-block {
    border: 2px dashed var(--yellow);
    padding: 1.25rem 1.5rem;
    box-shadow: 3px 3px 0 var(--yellow);
    background: rgba(230, 194, 0, 0.05);
    position: relative;
  }

  .work-block.current {
    border-style: solid;
    border-color: var(--coral);
    box-shadow: 3px 3px 0 var(--coral);
    background: rgba(255, 87, 87, 0.04);
    padding: 1.5rem;
  }

  .work-block-label {
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    border: 1px dotted var(--text-dim);
    padding: 0.1rem 0.4rem;
    display: inline-block;
    margin-bottom: 0.75rem;
  }

  .work-company {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.2rem;
  }

  .work-title {
    font-size: 0.75rem;
    color: var(--text-dim);
    margin-bottom: 0.75rem;
    font-style: italic;
  }

  .work-dates {
    font-size: 0.65rem;
    color: var(--text-dim);
    margin-bottom: 0.75rem;
    letter-spacing: 0.06em;
  }

  .work-desc {
    font-size: 0.72rem;
    line-height: 1.75;
    color: var(--text);
    margin-bottom: 0;
  }

  /* EDUCATION */
  .edu-row {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .edu-block {
    border: 2px dashed var(--purple);
    padding: 1.25rem 1.5rem;
    box-shadow: 3px 3px 0 var(--purple);
    background: rgba(108, 75, 255, 0.04);
  }

  .edu-school {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.2rem;
  }

  .edu-degree {
    font-size: 0.72rem;
    font-style: italic;
    color: var(--text-dim);
    margin-bottom: 0.5rem;
  }

  .edu-dates {
    font-size: 0.65rem;
    color: var(--text-dim);
    letter-spacing: 0.05em;
  }

  .skills-block {
    border: 2px dashed var(--green);
    padding: 1.25rem 1.5rem;
    box-shadow: 3px 3px 0 var(--green);
    background: rgba(26, 122, 60, 0.04);
  }

  .skills-list {
    list-style: none;
    font-size: 0.68rem;
    line-height: 2;
    color: var(--text);
  }

  .skills-list li::before {
    content: '—  ';
    color: var(--text-dim);
  }

  .interests-block {
    border: 2px dashed var(--coral);
    padding: 1.25rem 1.5rem;
    box-shadow: 3px 3px 0 var(--coral);
    background: rgba(255, 87, 87, 0.04);
  }

  /* PROJECTS */
  .proj-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .proj-block {
    border: 2px dashed var(--border);
    padding: 1rem 1.1rem;
    box-shadow: 2px 2px 0 var(--shadow);
    transition: box-shadow 0.1s, transform 0.1s;
  }

  .proj-block:nth-child(1) { border-color: var(--teal);   box-shadow: 2px 2px 0 var(--teal);   background: rgba(0,168,150,0.04); }
  .proj-block:nth-child(2) { border-color: var(--coral);  box-shadow: 2px 2px 0 var(--coral);  background: rgba(255,87,87,0.04); margin-top: 6px; }
  .proj-block:nth-child(3) { border-color: var(--purple); box-shadow: 2px 2px 0 var(--purple); background: rgba(108,75,255,0.04); margin-top: -4px; }
  .proj-block:nth-child(4) { border-color: var(--pink);   box-shadow: 2px 2px 0 var(--pink);   background: rgba(212,0,106,0.04); margin-top: 3px; }

  .proj-block:hover {
    box-shadow: 4px 4px 0 var(--shadow);
    transform: translate(-2px, -2px);
  }

  .proj-name {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--link);
    text-decoration: none;
    display: block;
    margin-bottom: 0.4rem;
  }

  .proj-name:hover { text-decoration: underline; }

  .proj-desc {
    font-size: 0.65rem;
    color: var(--text-dim);
    line-height: 1.65;
    margin-bottom: 0;
  }

  .all-projects-link {
    font-size: 0.65rem;
    color: var(--link);
    text-decoration: none;
    display: inline-block;
  }

  .all-projects-link:hover { text-decoration: underline; }

  /* LOGBOOK */
  .log-row {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 2rem;
    align-items: start;
  }

  .log-aside {
    border: 2px dashed var(--pink);
    padding: 1rem 1.25rem;
    box-shadow: 3px 3px 0 var(--pink);
    background: rgba(212, 0, 106, 0.04);
  }

  .log-aside-title {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.4rem;
  }

  .log-aside-sub {
    font-size: 0.65rem;
    color: var(--text-dim);
    line-height: 1.7;
    margin-bottom: 0.75rem;
  }

  .log-more {
    font-size: 0.62rem;
    color: var(--link);
    text-decoration: none;
  }

  .log-more:hover { text-decoration: underline; }

  .log-list { list-style: none; }

  .log-entry {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 1rem;
    padding: 0.55rem 0;
    border-bottom: 1px dotted var(--text-dim);
    align-items: baseline;
    font-size: 0.72rem;
  }

  .log-entry:first-child { border-top: 1px dotted var(--text-dim); }

  .log-date { color: var(--text-dim); font-size: 0.62rem; }
  .log-title { display: inline; }
  .log-title.book { text-decoration: underline; text-decoration-color: var(--text-dim); text-underline-offset: 2px; }
  .log-title.movie { font-style: italic; }
  .log-title.tv { font-weight: 700; font-size: 0.65rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-dim); }
  .log-title.concert { color: var(--link); }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .about-row,
    .work-row {
      grid-template-columns: 1fr;
    }

    .edu-row {
      grid-template-columns: 1fr;
    }

    .proj-row {
      grid-template-columns: 1fr 1fr;
    }

    .proj-block:nth-child(2),
    .proj-block:nth-child(3),
    .proj-block:nth-child(4) {
      margin-top: 0;
    }

    .log-row {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .proj-row {
      grid-template-columns: 1fr;
    }
  }
</style>
