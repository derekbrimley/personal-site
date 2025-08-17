<script>
    // import melody_generator from '$lib/images/melody-generator.png';
    export let project_img;
    export let project_url;
    export let project_name;
    export let project_description;
</script>
<div class='project_container'>
    <h3>
        <a target='blank' href={project_url}>{project_name}</a>
    </h3>
    <p class='project_description'>{project_description}</p>
    <img class='project_image' src={project_img} alt='melody generator homepage' />
</div>

<style>
    /* Individual project cards */
    .project_container {
        margin-bottom: 0;
        padding: 1.5rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #fafafa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
    }
    
    .project_description {
        color: #666;
        font-size: 0.9rem;
        line-height: 1.4;
        margin-bottom: 1rem;
        margin-top: 0;
    }
    
    .project_image {
        width: 250px;
    }
    
    h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    h3 a {
        text-decoration: none;
        color: var(--text-primary);
        transition: color 0.2s ease;
    }
    
    h3 a:hover {
        color: var(--text-secondary);
        text-decoration: underline;
    }
</style>