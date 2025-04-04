<script>
    import Header from '../Header.svelte';
    import { onMount } from 'svelte';
    
    let isVisible = false;
    
    onMount(() => {
        // Trigger animations after page loads
        setTimeout(() => {
            isVisible = true;
        }, 100);
    });
    
    // List of consumed items in reverse chronological order (newest first)
    const items = [
        { date: "01.15", title: "The Master and Margarita" },
        { date: "01.10", title: "Poor Things" },
        { date: "01.05", title: "Oppenheimer" },
        { date: "01.02", title: "Huckleberry Finn" }
    ];
</script>

<Header />

<main>
    <section class="logbook {isVisible ? 'fade-in' : ''}">
        <h1>Logbook 2025</h1>
        <p class="description">A chronological list of movies, books, and other media I've consumed this year.</p>
        
        <ul class="item-list">
            {#each items as item}
                <li class="item">
                    <span class="date">{item.date}</span>
                    <span class="title">{item.title}</span>
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        padding-top: var(--spacing-md);
    }
    
    section {
        margin-bottom: var(--spacing-2xl);
        opacity: 0;
    }
    
    section.fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    
    h1 {
        font-size: 2rem;
        margin-bottom: var(--spacing-md);
        font-weight: 300;
        letter-spacing: -0.01em;
    }
    
    .description {
        margin-bottom: var(--spacing-xl);
        max-width: 600px;
    }
    
    .item-list {
        list-style: none;
        padding: 0;
    }
    
    .item {
        padding: var(--spacing-md) 0;
        border-bottom: 1px solid var(--border);
        display: flex;
    }
    
    .item:first-child {
        border-top: 1px solid var(--border);
    }
    
    .date {
        width: 60px;
        font-family: 'Inter', monospace;
        font-size: 0.9rem;
        color: var(--text-secondary);
        flex-shrink: 0;
    }
    
    .title {
        font-weight: 400;
    }
    
    @media (max-width: 768px) {
        h1 {
            font-size: 1.8rem;
        }
        
        .item {
            padding: var(--spacing-sm) 0;
        }
    }
</style> 