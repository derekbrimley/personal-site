<script>
    import Header from '../Header.svelte';
    import limerick_homepage from '$lib/images/limerick_game_homepage.png';
    import interview_gpt from '$lib/images/interview_custom_gpt.png';
    import phase_shifter from '$lib/images/phase canon playground.png';
    import melody_generator from '$lib/images/melody-generator.png';
</script>
<Header />
<h2>projects</h2>
<div class='project_list'>

    <div class='project_container'>
        <h3>
            <a target='blank' href='https://chatgpt.com/g/g-bpSCO9run-user-interview-analyzer'>User Interview Custom GPT</a>
        </h3>
        <p class='project_description'>A custom GPT that analyzes user interview transcripts to extract key insights, pain points, and opportunities for product improvement.</p>
        <img class='project_image' src={interview_gpt} alt='interview custom gpt' />
    </div>
    <div class='project_container'>
        <h3>
            <a target='blank' href='https://limerick-game.vercel.app/'>The Limerick Game</a>
        </h3>
        <p class='project_description'>A collaborative game where players write one line of a limerick at a time.</p>
        <img class='project_image' src={limerick_homepage} alt='limerick game homepage' />
    </div>
    <div class='project_container'>
        <h3>
            <a target='blank' href='https://phase-shifter.vercel.app/'>Phase Canon Playground</a>
        </h3>
        <p class='project_description'>An interactive playground making phase shifting melodies with audio files or clickable grid scale.</p>
        <img class='project_image' src={phase_shifter} alt='limerick game homepage' />
    </div>
    <div class='project_container'>
        <h3>
            <a target='blank' href='https://melody-generator-oeez4jp8h-derek-brimleys-projects.vercel.app/'>Melody Generator</a>
        </h3>
        <p class='project_description'>Web app for generating melodies and chord progressions with configurable parameters.</p>
        <img class='project_image' src={melody_generator} alt='melody generator homepage' />
    </div>
</div>

<style>
    .project_list {
        display: flex;
        gap: 2rem;
        justify-content: flex-start;
        max-width: 1200px;
        flex-wrap: wrap;
        margin: 0 12px;
    }
    .project_image {
        width: 250px;
    }
    
    h2 {
        margin: 2rem 12px;
        color: #1f2937;
    }
    
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
    
    h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        color: #333;
    }
    
    h3 a {
        text-decoration: none;
        color: #2563eb;
        transition: color 0.2s ease;
    }
    
    h3 a:hover {
        color: #1d4ed8;
        text-decoration: underline;
    }
</style>