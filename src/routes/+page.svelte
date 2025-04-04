<script>
    import Header from './Header.svelte';
    import { onMount } from 'svelte';
    
    let isVisible = false;
    
    onMount(() => {
        // Trigger animations after page loads
        setTimeout(() => {
            isVisible = true;
        }, 100);
    });
</script>

<Header />

<main>
       
    <section class="about {isVisible ? 'slide-up' : ''}">
        <h2>about</h2>
        <div class="about-content">
            <div class="about-text">
                <p>I'm a product manager currently at <a href="https://www.rainfocus.com/" target="_blank" rel="noopener noreferrer">RainFocus</a>, building software that helps companies run large-scale events.</p>
            </div>
        </div>
    </section>
    <div class="footer-social">
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/derekbrimley/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/derekbrimley" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
    </div>
</main>

<style>
    main {
        padding-top: var(--spacing-md);
    }
    
    section {
        margin-bottom: var(--spacing-2xl);
        opacity: 0;
        transform: translateY(20px);
    }
    
    section.fade-in {
        animation: fadeIn 1s ease forwards;
    }
    
    section.slide-up {
        animation: slideUp 0.5s ease forwards;
        animation-delay: 0.2s;
    }
    
    h2 {
        font-size: 1.5rem;
        margin-bottom: var(--spacing-lg);
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-weight: 400;
    }
    
    h2::after {
        display: none;
    }
    
    /* Hero section */
    .hero {
        display: flex;
        align-items: center;
        min-height: 70vh;
        padding: var(--spacing-xl) 0;
    }
    
    .hero-content {
        max-width: 800px;
    }
    
    .hero h1 {
        font-size: 2.5rem;
        line-height: 1.1;
        margin-bottom: var(--spacing-md);
        font-weight: 300;
        letter-spacing: -0.01em;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
        margin-bottom: var(--spacing-xl);
        font-weight: 300;
    }
    
    .hero-buttons {
        display: flex;
        gap: var(--spacing-md);
    }
    
    .btn-outline {
        border: 1px solid var(--accent);
        padding: calc(var(--spacing-sm) - 1px) calc(var(--spacing-lg) - 1px);
        font-weight: 400;
        transition: all var(--transition-fast);
        color: var(--accent);
    }
    
    .btn-outline:hover {
        background-color: var(--accent);
        color: white;
    }
    
    /* About section */
    .about-content {
        max-width: 700px;
    }
    
    /* Skills section */
    .skill-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-md);
    }
    
    .card-inner {
        padding: var(--spacing-lg);
    }
    
    .card-inner h4 {
        margin-bottom: var(--spacing-sm);
        font-weight: 400;
        letter-spacing: 0.02em;
    }
    
    /* Interests section */
    .interest-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-xl);
    }
    
    .interest-item h3 {
        margin-bottom: var(--spacing-sm);
        font-weight: 400;
        letter-spacing: 0.02em;
    }
    
    /* Philosophy section */
    .quote-card {
        padding: var(--spacing-xl) 0;
        position: relative;
        border: none;
        max-width: 700px;
    }
    footer {
        margin-top: auto;
        padding: var(--spacing-xl) 0;
        background-color: var(--card-bg);
        border-top: 1px solid var(--border);
    }
    
    .footer-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);
    }
    
    .footer-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--spacing-xl);
    }
    
    .footer-info .name {
        font-weight: 400;
        letter-spacing: 0.02em;
        margin-bottom: var(--spacing-xs);
    }
    
    .footer-links ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .footer-links a {
        text-transform: lowercase;
        letter-spacing: 0.02em;
        font-size: 0.9rem;
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
    
    .footer-bottom {
        padding-top: var(--spacing-md);
        text-align: center;
        font-size: 0.8rem;
        opacity: 0.7;
        border-top: 1px solid var(--border);
    }
    
    @media (max-width: 768px) {
        .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
        }
        
        .footer-info,
        .footer-links,
        .footer-social {
        text-align: center;
        }
        
        .footer-links ul {
        align-items: center;
        }
        
        .social-icons {
        justify-content: center;
        }
    }
    
    blockquote {
        font-size: 1.3rem;
        font-weight: 300;
        font-style: italic;
        margin-bottom: var(--spacing-md);
    }
    
    blockquote p {
        position: relative;
    }
    
    blockquote p::before {
        display: none;
    }
    
    @media (max-width: 768px) {
        .hero h1 {
            font-size: 2rem;
        }
        
        .hero-subtitle {
            font-size: 1.1rem;
        }
        
        .hero-buttons {
            flex-direction: column;
            gap: var(--spacing-sm);
        }
        
        .btn {
            width: 100%;
            text-align: center;
        }
    }
</style>
