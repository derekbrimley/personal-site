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
    
    // List of seen/read items in reverse chronological order (newest first)
    const items = [
        { date: "01.03", title: "Anna Karenina", type: "book" },
        { date: "01.04", title: "Before Sunrise", type: "movie" },
        { date: "01.08", title: "Before Sunset", type: "movie" },
        { date: "01.10", title: "Before Midnight", type: "movie" },
        { date: "01.11", title: "Brahm's Violin Concerto", type: "concert" },
        { date: "01.11", title: "Romeo and Juliet", type: "book" },
        { date: "01.11", title: "Brahm's Violin Concerto", type: "concert" },
        { date: "01.18", title: "Severance", type: "tv" },
        { date: "01.24", title: "Severance", type: "tv" },
        { date: "01.31", title: "Severance", type: "tv" },
        { date: "02.01", title: "Reich's The Desert Music, Stravinsky's The Rite of Spring", type: "concert" },
        { date: "02.06", title: "Severance", type: "tv" },
        { date: "02.13", title: "Severance", type: "tv" },
        { date: "02.20", title: "Severance", type: "tv" },
        { date: "02.22", title: "Pride and Prejudice", type: "book" },
        { date: "02.22", title: "Solaris", type: "book" },
        { date: "02.24", title: "MJ Lenderman w/ Wild Pink", type: "concert" },
        { date: "02.27", title: "Severance", type: "tv" },
        { date: "03.02", title: "The Truman Show", type: "movie" },
        { date: "03.06", title: "Severance", type: "tv" },
        { date: "03.08", title: "The Master", type: "movie" },
        { date: "03.09", title: "The Great Gatsby", type: "book" },
        { date: "03.13", title: "The French Dispatch", type: "movie" },
        { date: "03.16", title: "Severance", type: "tv" },
        { date: "03.17", title: "The Five Types of Wealth", type: "book" },
        { date: "03.18", title: "A Midsummer Night's Dream", type: "book" },
        { date: "03.19", title: "The Savage Detectives", type: "book" },
        { date: "03.20", title: "Severance", type: "tv" },
        { date: "03.22", title: "The Day The Earth Blew Up: A Looney Tunes Movie", type: "movie" },
        { date: "03.28", title: "Who's Afraid of Virginia Woolf?", type: "movie" },
        { date: "04.01", title: "The Adventures of Huckleberry Finn", type: "book" },
        
    ];
</script>

<Header />

<main>
    <section class="seen-read {isVisible ? 'fade-in' : ''}">
        <div class="logbook-container">
            <div class="logbook-content">
                <h1>Books, Movies, TV, and Music from 2025</h1>
                <p class="description">Underlined: <u>Book</u></p>
                <p class="description">Italicized: <i>Movie</i></p>
                <p class="description">All Caps: TV SHOW</p>
                <p class="description">Bolded: <b>Concert</b></p>
                
                <ul class="item-list">
                    {#each items as item}
                        <li class="item">
                            <span class="date">{item.date}</span>
                            <span class="title">
                                {#if item.type === 'book'}
                                    <u>{item.title}</u>
                                {:else if item.type === 'movie'}
                                    <i>{item.title}</i>
                                {:else if item.type === 'tv'} 
                                    {item.title.toUpperCase()}
                                {:else if item.type === 'concert'}
                                    <b>{item.title}</b>
                                {/if}
                                
                            </span>
                        </li>
                    {/each}
                </ul>
            </div>
            
            <div class="apple-music-container">          
                <iframe 
                    title="2025 Favorite Tracks Apple Music Playlist" 
                    allow="autoplay *; encrypted-media *;"
                    height="500" 
                    style="width:100%;overflow:hidden;border-radius:10px;background:transparent;" 
                    src="https://embed.music.apple.com/us/playlist/2025-favorite-tracks/pl.u-76oNkLNsvqz51B?theme=light&amp;ls=1&amp;app=music&amp;itsct=music_box_player&amp;itscg=30200">
                </iframe>
            </div>
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
    
    /* Layout containers */
    .logbook-container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xl);
        align-items: flex-start;
        min-height: 100vh; /* Ensures there's enough height for scrolling */
    }
    
    .logbook-content {
        flex: 1;
        min-width: 300px;
    }
    
    .apple-music-container {
        padding: var(--spacing-md);
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.03);
        margin-bottom: var(--spacing-lg);
        text-align: center;
        width: 300px;
        position: sticky;
        top: 80px; /* Adjust as needed based on your header height plus some spacing */
        flex-shrink: 0;
        align-self: flex-start;
        max-height: calc(100vh - 160px); /* Ensures it doesn't exceed viewport height */
    }
    
    .apple-music-container a {
        color: #fa586a;
        font-weight: 500;
        text-decoration: none;
    }
    
    .apple-music-container a:hover {
        text-decoration: underline;
    }
    
    /* Mobile styles */
    @media (max-width: 768px) {
        h1 {
            font-size: 1.8rem;
        }
        
        .item {
            padding: var(--spacing-sm) 0;
        }
        
        .logbook-container {
            flex-direction: column;
            min-height: auto;
        }
        
        .apple-music-container {
            width: 100%;
            max-width: 100%;
            order: -1;
            position: static !important; /* Use !important to override sticky */
            top: auto !important;
            max-height: none;
        }
    }
</style> 