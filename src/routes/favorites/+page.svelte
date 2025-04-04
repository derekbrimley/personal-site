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

    // Organize favorites by category
    const concertMusic = [
        "Beethoven",
        "Messiaen",
        "Bach",
        "Reich"
    ];

    const albums = [
        { title: "The Lemon of Pink", artist: "The Books" },
        { title: "Sung Tongs", artist: "Animal Collective" },
        { title: "Tomboy", artist: "Panda Bear" },
        { title: "Dragon New Warm Mountain I Believe In You", artist: "Big Thief" },
        { title: "Impersonator", artist: "Majical Cloudz" },
        { title: "Halcyon Digest", artist: "Deerhunter" },
        { title: "The Age of Adz", artist: "Sufjan Stevens" },
        { title: "Sweetheart of the Rodeo", artist: "The Byrds" },
        { title: "Life's Rich Pageant", artist: "R.E.M." },
        { title: "Nebraska", artist: "Bruce Springsteen" },
        { title: "Remain in Light", artist: "Talking Heads" },
        { title: "Spirit of Eden", artist: "Talk Talk" },
        { title: "Wowee Zowee", artist: "Pavement" },
        { title: "The Idler Wheel...", artist: "Fiona Apple" },
        { title: "Modern Vampires of the City", artist: "Vampire Weekend" },
        { title: "Human Performance", artist: "Parquet Courts" },
        { title: "In Rainbows", artist: "Radiohead" },
        { title: "Madvillainy", artist: "MF Doom" },
        { title: "Summertime '06", artist: "Vince Staples" },
        { title: "Blonde", artist: "Frank Ocean" },
        { title: "New Energy", artist: "Four Tet" },
        { title: "Shields", artist: "Grizzly Bear" },
        { title: "Are We There", artist: "Sharon Van Etten" },
        { title: "Lonerism", artist: "Tame Impala" },
        { title: "Celebration Rock", artist: "Japandroids" },
        { title: "Good Kid, m.A.A.d City", artist: "Kendrick Lamar" },
        { title: "Wakin On A Pretty Daze", artist: "Kurt Vile" },
        { title: "Pink Moon", artist: "Nick Drake" },
        { title: "Red, Yellow & Blue", artist: "Born Ruffians" },
        { title: "Atlas", artist: "Real Estate" },
        { title: "Lush", artist: "Snail Mail" },
        { title: "Miss Universe", artist: "Nilüfer Yanya" },
        { title: "God Save the Animals", artist: "Alex G" },
        { title: "Cardinal", artist: "Pinegrove" },
        { title: "Brilliant Corners", artist: "Thelonious Monk" },
        { title: "The Moon and Antarctica", artist: "Modest Mouse" },
        { title: "Ants From Up There", artist: "Black Country, New Road" },
        { title: "Yeezus", artist: "Kanye West" },
        { title: "Entertainment!", artist: "Gang of Four" },
        { title: "Let It Be", artist: "The Replacements" },
        { title: "A Love Supreme", artist: "John Coltrane" },
        { title: "Return to Forever", artist: "Chick Corea" },
        { title: "The Complete Village Vanguard Recordings", artist: "Bill Evans Trio" },
        { title: "Journey in Satchidananda", artist: "Alice Coltrane" },
        { title: "Suite for Max Brown", artist: "Jeff Parker" }
    ];

    // Placeholder for books and movies for now
    const books = [];
    const movies = [];
    const quotes = [];
</script>

<Header />

<main>
    <section class="favorites-section {isVisible ? 'fade-in' : ''}">
        <h1>Favorites</h1>
        
        <div class="category">
            <h2>Music</h2>
            
            <div class="subcategory">
                <h3>Concert Music</h3>
                <div class="grid-layout">
                    {#each concertMusic as composer}
                        <div class="grid-item">
                            <div class="square-item">{composer}</div>
                        </div>
                    {/each}
                </div>
            </div>
            
            <div class="subcategory">
                <h3>Albums</h3>
                <div class="grid-layout">
                    {#each albums as album}
                        <div class="grid-item">
                            <div class="square-item">
                                <div class="album-title">{album.title}</div>
                                <div class="album-artist">{album.artist}</div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        
        <div class="category">
            <h2>Books</h2>
            <p class="coming-soon">Coming soon</p>
        </div>
        
        <div class="category">
            <h2>Movies</h2>
            <p class="coming-soon">Coming soon</p>
        </div>
        
        <div class="category">
            <h2>Quotes</h2>
            <p class="coming-soon">Coming soon</p>
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
        margin-bottom: var(--spacing-lg);
        font-weight: 300;
        letter-spacing: -0.01em;
    }
    
    h2 {
        font-size: 1.5rem;
        margin-bottom: var(--spacing-md);
        font-weight: 400;
        letter-spacing: 0.02em;
        text-transform: lowercase;
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--spacing-xs);
    }
    
    h3 {
        font-size: 1rem;
        margin-bottom: var(--spacing-sm);
        font-weight: 400;
        color: var(--text-secondary);
    }
    
    .category {
        margin-bottom: var(--spacing-lg);
    }
    
    .subcategory {
        margin-bottom: var(--spacing-md);
    }
    
    .grid-layout {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
    }
    
    .grid-item {
        aspect-ratio: 1 / 1;
        
    }
    
    .square-item {
        height: 150px;
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--card-bg);
        border: 1px solid var(--border);
        padding: var(--spacing-xs);
        text-align: center;
        font-size: 0.8rem;
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }
    
    .square-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    
    .album-title {
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .album-artist {
        margin-top: 4px;
        color: var(--text-secondary);
        font-size: 0.75rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .coming-soon {
        color: var(--text-secondary);
        font-style: italic;
        margin-top: var(--spacing-sm);
    }
    
    @media (max-width: 768px) {
        .grid-layout {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
    }
    
    @media (max-width: 480px) {
        .grid-layout {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        }
        
        .square-item {
            font-size: 0.7rem;
        }
    }
</style>