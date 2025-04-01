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
    <section class="hero">
        <div class="hero-content {isVisible ? 'fade-in' : ''}">
            <h1>Derek Brimley</h1>
            <p class="hero-subtitle">Product Leader</p>
            <div class="hero-buttons">
                <a href="/projects" class="btn btn-primary">Projects</a>
                <a href="/contact-me" class="btn btn-outline">Contact</a>
            </div>
        </div>
    </section>
    
    <section class="about {isVisible ? 'slide-up' : ''}">
        <h2>About</h2>
        <div class="about-content">
            <div class="about-text">
                <p>I'm a product guy currently at <a href="https://www.rainfocus.com/" target="_blank" rel="noopener noreferrer">RainFocus</a>, building software that helps companies run large-scale events.</p>
                <p>With a passion for creating intuitive digital experiences, I help teams deliver products that users love. My approach combines analytical thinking with creative problem-solving.</p>
            </div>
        </div>
    </section>
    
    <section class="skills {isVisible ? 'slide-up' : ''}">
        <h2>What I Do</h2>
        <div class="skill-cards">
            <div class="card">
                <div class="card-inner">
                    <h4>Product Strategy</h4>
                    <p>Creating visions and roadmaps that align with business goals</p>
                </div>
            </div>
            <div class="card">
                <div class="card-inner">
                    <h4>User Research</h4>
                    <p>Understanding user needs to build better products</p>
                </div>
            </div>
            <div class="card">
                <div class="card-inner">
                    <h4>Data Analysis</h4>
                    <p>Making informed decisions through metrics and insights</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="interests {isVisible ? 'slide-up' : ''}">
        <h2>Interests</h2>
        <div class="interest-items">
            <div class="interest-item">
                <h3>Music</h3>
                <p>Always exploring new genres and artists. From indie rock to jazz, my playlist is ever-evolving.</p>
            </div>
            <div class="interest-item">
                <h3>Travel</h3>
                <p>Exploring new cultures and places is my passion. Every destination has its unique stories and perspectives.</p>
            </div>
            <div class="interest-item">
                <h3>Family</h3>
                <p>Spending quality time with family is my highest priority and greatest joy.</p>
            </div>
        </div>
    </section>
    
    <section class="philosophy {isVisible ? 'slide-up' : ''}">
        <h2>Philosophy</h2>
        <div class="quote-card">
            <blockquote>
                <p>Trying to dumb things down.</p>
            </blockquote>
            <p>I believe in simplicity and clarity. The best products don't require lengthy explanations—they just work.</p>
        </div>
    </section>
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
