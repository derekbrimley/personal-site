<script>
    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    
    function closeMenu() {
        isMenuOpen = false;
    }
</script>

<header>
    <div class="container header-container">
        <div class="logo">
            <h1><a href="/" on:click={closeMenu}>derek brimley</a></h1>
        </div>
        
        <button class="mobile-menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
            <span class={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <nav class={isMenuOpen ? 'show' : ''}>
            <ul>
                <li><a href="/" on:click={closeMenu}>Home</a></li>
                <li><a href="/projects" on:click={closeMenu}>Projects</a></li>
                <li><a href="/logbook" on:click={closeMenu}>Logbook</a></li>
                <li><a href="/favorites" on:click={closeMenu}>Favorites</a></li>
                <li><a href="/contact-me" on:click={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

<style>
    header {
        padding: var(--spacing-md) 0;
        position: sticky;
        top: 0;
        z-index: 100;
        transition: background-color var(--transition-normal);
        background-color: rgba(255, 255, 255, 0.9);
        border-bottom: 1px solid var(--border);
    }
    
    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .logo h1 {
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.05em;
        text-transform: lowercase;
        margin: 0;
    }
    
    .logo a {
        text-decoration: none;
        transition: color var(--transition-fast);
        color: var(--text-primary);
    }
    
    nav {
        display: flex;
        align-items: center;
    }
    
    nav ul {
        display: flex;
        list-style: none;
        gap: var(--spacing-xl);
    }
    
    nav a {
        font-weight: 400;
        font-size: 0.9rem;
        text-transform: lowercase;
        letter-spacing: 0.03em;
    }
    
    nav a::after {
        display: none;
    }
    
    .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        width: 24px;
        height: 24px;
        position: relative;
    }
    
    .hamburger {
        width: 24px;
        height: 1px;
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: background-color var(--transition-normal);
        background-color: var(--text-primary);
    }
    
    .hamburger::before, .hamburger::after {
        content: '';
        width: 24px;
        height: 1px;
        position: absolute;
        transition: transform var(--transition-normal);
        background-color: var(--text-primary);
    }
    
    .hamburger::before {
        top: -6px;
    }
    
    .hamburger::after {
        bottom: -6px;
    }
    
    .hamburger.open {
        background-color: transparent;
    }
    
    .hamburger.open::before {
        transform: rotate(45deg);
        top: 0;
    }
    
    .hamburger.open::after {
        transform: rotate(-45deg);
        bottom: 0;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block;
            z-index: 101;
        }
        
        nav {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 75%;
            max-width: 250px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateX(100%);
            transition: transform var(--transition-normal);
            background-color: var(--background);
            border-left: 1px solid var(--border);
        }
        
        nav.show {
            transform: translateX(0);
        }
        
        nav ul {
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-xl);
        }
    }
</style>