<script>
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container footer-container">
    <div class="footer-content">
      <div class="footer-info">
        <p class="name">Derek Brimley</p>
        <p>Product Leader</p>
      </div>
      
      <div class="footer-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/seen-read">Seen/Read</a></li>
          <li><a href="/favorites">Favorites</a></li>
          <li><a href="/contact-me">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-social">
        <div class="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {year} Derek Brimley</p>
    </div>
  </div>
</footer>

<style>
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
</style> 