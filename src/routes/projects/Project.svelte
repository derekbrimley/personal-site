<script>
  export let project_img;
  export let project_url;
  export let project_name;
  export let project_description;
</script>

<div class="project_container">
  <h3><a target="_blank" href={project_url} rel="noopener noreferrer">{project_name}</a></h3>
  <p class="project_description">{project_description}</p>
  {#if project_img}
    <img class="project_image" src={project_img} alt="{project_name} homepage" />
  {/if}
</div>

<style>
  .project_container {
    border: 2px dashed var(--border);
    padding: 1.1rem 1.25rem;
    box-shadow: 2px 2px 0 var(--shadow);
    transition: box-shadow 0.1s, transform 0.1s;
    background: rgba(34, 34, 32, 0.02);
  }

  .project_container:hover {
    box-shadow: 4px 4px 0 var(--shadow);
    transform: translate(-2px, -2px);
  }

  h3 {
    font-size: 0.82rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h3 a {
    color: var(--link);
    text-decoration: none;
  }

  h3 a:hover {
    text-decoration: underline;
  }

  .project_description {
    font-size: 0.68rem;
    color: var(--text-dim);
    line-height: 1.65;
    margin-bottom: 0.75rem;
    margin-top: 0;
  }

  .project_image {
    width: 100%;
    border: 1px dashed var(--border);
    display: block;
  }
</style>
