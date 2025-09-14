<script>
    import Header from '../Header.svelte';
    import Project from './Project.svelte';
    import limerick_homepage from '$lib/images/limerick_game_homepage.png';
    import interview_gpt from '$lib/images/interview_custom_gpt.png';
    import phase_shifter from '$lib/images/phase canon playground.png';
    import melody_generator from '$lib/images/melody-generator.png';
    import vision_guide from '$lib/images/vision-guide.png';
    import oblique_assistant from '$lib/images/oblique-assistant.png';
    import standards_journey from '$lib/images/standards_journey.png'

    import { onMount } from 'svelte';
    
    let isVisible = false;
    
    onMount(() => {
        console.log('projects page loaded');
        // Trigger animations after page loads
        setTimeout(() => {
            isVisible = true;
        }, 0);
    });
</script>
<Header />
<main class="main">
    <section class="projects {isVisible ? 'fade-in' : ''}">

        <h2 class="page_title">projects</h2>
        <div class='project_list'>
            <Project
                project_img={oblique_assistant}
                project_url='https://oblique-assistant.derek-brimley.com/'
                project_name='Oblique Music Assistant'
                project_description='Your AI companion for creative music breakthroughs.'
            />
            <Project
                project_img={standards_journey}
                project_url='https://standards-journey.derek-brimley.com/dashboard'
                project_name='Jazz Standards Workbook'
                project_description='Log, track your progress, add helpful resources while learning Jazz standards.'
            />
            <Project
                project_img={phase_shifter}
                project_url='https://phasecanon.derek-brimley.com/'
                project_name='Phase Canon Playground'
                project_description='An interactive playground making phase shifting melodies with audio files or clickable grid scale.'
            />
            <Project
                project_img={melody_generator}
                project_url='https://melody-generator.derek-brimley.com/'
                project_name='Melody Generator'
                project_description='Web app for generating melodies and chord progressions with configurable parameters.'
            />
            <Project
                project_img={limerick_homepage}
                project_url='https://limerickgame.derek-brimley.com/'
                project_name='The Limerick Game'
                project_description='A collaborative game where players write one line of a limerick at a time.'
            />
            <Project
                project_img={vision_guide}
                project_url='https://visionguide.derek-brimley.com/'
                project_name='Vision Guide'
                project_description="A guided questionaire to help you develop a 'life vision', inspired by the ideas from 
Sahil Bloom's The 5 Types of Wealth and Cal Newport's various books and podcasts."
            />
            <Project
                project_img={interview_gpt}
                project_url='https://chatgpt.com/g/g-bpSCO9run-user-interview-analyzer'
                project_name='User Interview Custom GPT'
                project_description='A custom GPT that analyzes user interview transcripts to extract key insights, pain points, and opportunities for product improvement.'
            />
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