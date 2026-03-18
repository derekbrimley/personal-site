<script>
    import Header from '../Header.svelte';
    import Project from './Project.svelte';
    import limerick_homepage from '$lib/images/limerick_game_homepage.png';
    import interview_gpt from '$lib/images/interview_custom_gpt.png';
    import phase_shifter from '$lib/images/phase canon playground.png';
    import melody_generator from '$lib/images/melody-generator.png';
    import vision_guide from '$lib/images/vision-guide.png';
    import oblique_assistant from '$lib/images/oblique-assistant.png';
    import standards_journey from '$lib/images/standards_journey.png';
    import piano_coach from '$lib/images/piano-coach.png';

    import { onMount } from 'svelte';
    
    let isVisible = false;
    
    onMount(() => {
        console.log('projects page loaded');
        // Trigger animations after page loads
        setTimeout(() => {
            isVisible = true;
        }, 0);
    });
    const projects = [
        {
            img: null,
            url: 'https://reclist-rho.vercel.app/',
            name: 'Reclist',
            desc: 'A mobile-first PWA for collecting music recommendations and triaging them into an Apple Music playlist.'
        },
        {
            img: piano_coach,
            url: 'https://piano-coach.app',
            name: 'Piano Coach',
            desc: 'AI-powered piano practice sessions based on your goals and skills.'
        },
        {
            img: oblique_assistant,
            url: 'https://oblique-assistant.derek-brimley.com/',
            name: 'Oblique Music Assistant',
            desc: 'Your AI companion for creative music breakthroughs.'
        },
        {
            img: standards_journey,
            url: 'https://standards-journey.derek-brimley.com/dashboard',
            name: 'Jazz Standards Workbook',
            desc: 'Log, track your progress, add helpful resources while learning Jazz standards.'
        },
        {
            img: phase_shifter,
            url: 'https://phasecanon.derek-brimley.com/',
            name: 'Phase Canon Playground',
            desc: 'An interactive playground making phase shifting melodies with audio files or clickable grid scale.'
        },
        {
            img: melody_generator,
            url: 'https://melody-generator.derek-brimley.com/',
            name: 'Melody Generator',
            desc: 'Web app for generating melodies and chord progressions with configurable parameters.'
        },
        {
            img: limerick_homepage,
            url: 'https://limerickgame.derek-brimley.com/',
            name: 'The Limerick Game',
            desc: 'A collaborative game where players write one line of a limerick at a time.'
        },
        {
            img: vision_guide,
            url: 'https://visionguide.derek-brimley.com/',
            name: 'Vision Guide',
            desc: "A guided questionaire to help you develop a 'life vision', inspired by the ideas from Sahil Bloom's The 5 Types of Wealth and Cal Newport's various books and podcasts."
        },
        {
            img: interview_gpt,
            url: 'https://chatgpt.com/g/g-bpSCO9run-user-interview-analyzer',
            name: 'User Interview Custom GPT',
            desc: 'A custom GPT that analyzes user interview transcripts to extract key insights, pain points, and opportunities for product improvement.'
        },
    ];
</script>
<Header />
<main class="main">
    <section class="projects {isVisible ? 'fade-in' : ''}">
        <h2 class="page_title">projects</h2>
        <div class='project_list'>
            {#each projects as project}
                <Project
                    project_img={project.img}
                    project_url={project.url}
                    project_name={project.name}
                    project_description={project.desc}
                />
            {/each}
        </div>
    </section>

</main>

<style>
    section.fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    .project_list {
        display: flex;
        gap: 2rem;
        justify-content: flex-start;
        width: 80vw;
        flex-wrap: wrap;
        margin: 0 12px;
    }
</style>