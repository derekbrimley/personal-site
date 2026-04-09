<script>
  import Project from './Project.svelte';
  import limerick_homepage from '$lib/images/limerick_game_homepage.png';
  import interview_gpt from '$lib/images/interview_custom_gpt.png';
  import phase_shifter from '$lib/images/phase canon playground.png';
  import melody_generator from '$lib/images/melody-generator.png';
  import vision_guide from '$lib/images/vision-guide.png';
  import oblique_assistant from '$lib/images/oblique-assistant.png';
  import standards_journey from '$lib/images/standards_journey.png';
  import piano_coach from '$lib/images/piano-coach.png';
  import crates from '$lib/images/crates.png';

  const projects = [
    {
      img: crates,
      url: 'https://crate-zeta.vercel.app//',
      name: 'Crates',
      desc: 'Intentionally choose what to listen to from your favorite albums and recommendations you\'ve collected'
    },  
    {
      img: piano_coach,
      url: 'https://piano-coach.derek-brimley.com',
      name: 'Piano Coach',
      desc: 'AI-powered piano practice sessions based on your goals and skills.'
    },
    {
      img: phase_shifter,
      url: 'https://phasecanon.derek-brimley.com/',
      name: 'Phase Canon Playground',
      desc: 'An interactive playground making phase shifting melodies with audio files or clickable grid scale.'
    },
    {
      img: oblique_assistant,
      url: 'https://oblique-assistant.derek-brimley.com/',
      name: 'Oblique Music Assistant',
      desc: 'Your AI companion for creative music breakthroughs.'
    },
    {
      img: limerick_homepage,
      url: 'https://limerickgame.derek-brimley.com/',
      name: 'The Limerick Game',
      desc: 'A collaborative game where players write one line of a limerick at a time.'
    },
    {
      img: standards_journey,
      url: 'https://standards-journey.derek-brimley.com/dashboard',
      name: 'Jazz Standards Workbook',
      desc: 'Log, track your progress, add helpful resources while learning Jazz standards.'
    },
    {
      img: melody_generator,
      url: 'https://melody-generator.derek-brimley.com/',
      name: 'Melody Generator',
      desc: 'Web app for generating melodies and chord progressions with configurable parameters.'
    },
    {
      img: vision_guide,
      url: 'https://visionguide.derek-brimley.com/',
      name: 'Vision Guide',
      desc: "A guided questionnaire to help you develop a life vision, inspired by Sahil Bloom's The 5 Types of Wealth."
    },
    {
      img: interview_gpt,
      url: 'https://chatgpt.com/g/g-bpSCO9run-user-interview-analyzer',
      name: 'User Interview Custom GPT',
      desc: 'A custom GPT that analyzes user interview transcripts to extract key insights and opportunities.'
    },
  ];
</script>

<div class="section-label">projects</div>
<div class="proj-grid">
  {#each projects as project}
    <Project
      project_img={project.img}
      project_url={project.url}
      project_name={project.name}
      project_description={project.desc}
    />
  {/each}
</div>

<style>
  .proj-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 640px) {
    .proj-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
