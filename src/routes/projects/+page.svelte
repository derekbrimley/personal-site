<script>
    import Header from '../Header.svelte';
    import limerick_homepage from '$lib/images/limerick_game_homepage.png';
    import interview_gpt from '$lib/images/interview_custom_gpt.png';
</script>
<Header />
<h2>projects</h2>
<div>
    <h3>
        <a target='blank' href='https://chatgpt.com/g/g-bpSCO9run-user-interview-analyzer'>User Interview Custom GPT</a>
    </h3>
    <img class='project_image' src={interview_gpt} alt='interview custom gpt' />
</div>
<div>
    <h3>
        <a target='blank' href='https://limerick-game.vercel.app/'>The Limerick Game</a>
    </h3>
    <img class='project_image' src={limerick_homepage} alt='limerick game homepage' />
</div>

<style>
    .project_image {
        height: 250px;
    }
</style>