<script>
    import Header from './Header.svelte';
    import { onMount } from 'svelte';
    import initials from '$lib/images/favicon.svg'
    let isVisible = false;
    
    onMount(() => {
        // Trigger animations after page loads
        setTimeout(() => {
            isVisible = true;
        }, 100); // Small delay to ensure smooth transition
    });
</script>

<Header />

<main class="main">
       
    <section class="about {isVisible ? 'fade-in' : 'fade-out'}">
        <img src={initials} alt="Derek Brimley" class="about-image" />
        <div class="about-content">
            <div class="about-text">
                <p>Making software for events at <a href="https://www.rainfocus.com/" target="_blank">RainFocus.</a></p>
                <p>Making the most of finitude.</p>
                <p>Making contact with reality.</p>
                <p>Listening closely.</p>
            </div>
        </div>
    </section>
    <div class="footer">
        <div class="social-icons">
            <a href="https://x.com/derekbrimley" target="_blank" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>
            <a href="https://www.linkedin.com/in/derekbrimley/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://github.com/derekbrimley" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
    </div>
</main>

<style>

    /* Initial state - content is hidden */
    .fade-out {
        opacity: 0;
    }
    
    /* Animation state - content fades in */
    section.fade-in {
        animation: fadeIn 0.8s ease forwards;
    }

    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vw;
        margin: 200px 0;
        padding: 16px;
        border: 2px solid var(--text-primary);
        box-shadow: var(--text-primary) 0px 7px 29px 0px
    }
    
    /* About section */
    .about-content {
        max-width: 700px;
    }

    .social-icons {
        display: flex;
        gap: var(--spacing-md);
    }
    
    .social-icons a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        transition: transform var(--transition-fast), opacity var(--transition-fast);
    }
    
    .social-icons a:hover {
        transform: translateY(-2px);
        opacity: 0.8;
    }
    
    @media (max-width: 768px) {
        
        .social-icons {
        justify-content: center;
        }
    }
</style>
