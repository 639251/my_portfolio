// ===== Mobile Navbar Toggle with Accessibility =====
(function () {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  const htmlElement = document.documentElement; // Cache html element

  if (menuToggle && navLinks) {
    const icon = menuToggle.querySelector('i');

    /**
     * Opens the mobile navigation menu.
     */
    function openMenu() {
      navLinks.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      if (icon) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
      htmlElement.classList.add('no-scroll'); // Prevent background scroll
    }

    /**
     * Closes the mobile navigation menu.
     */
    function closeMenu() {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
      htmlElement.classList.remove('no-scroll'); // Re-enable background scroll
    }

    /**
     * Toggles the mobile navigation menu's open/close state.
     */
    function toggleMenu() {
      if (navLinks.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // Event Listeners
    menuToggle.addEventListener('click', toggleMenu);

    // Close on link click (using event delegation on navLinks)
    navLinks.addEventListener('click', (e) => {
      const targetLink = e.target.closest('a');
      if (targetLink) {
        closeMenu();
      }
    });

    // Close on ESC key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });

    // Close when clicking outside the menu or toggle button
    document.addEventListener('click', (e) => {
      const isClickInsideMenu = navLinks.contains(e.target);
      const isClickOnToggle = menuToggle.contains(e.target);
      if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // ===== Read More / Read Less for Project Cards =====
  document.querySelectorAll('.read-more-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      if (!card) return; // Ensure card exists

      const desc = card.querySelector('.project-description');
      const shortText = desc?.querySelector('.short-text');
      const fullText = desc?.querySelector('.full-text');

      if (!shortText || !fullText) return; // Ensure both text elements exist

      const isShowingFull = fullText.style.display === 'inline';

      if (isShowingFull) {
        fullText.style.display = 'none';
        shortText.style.display = 'inline';
        btn.textContent = 'Read More';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        fullText.style.display = 'inline';
        shortText.style.display = 'none';
        btn.textContent = 'Read Less';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ===== Update Footer Year Dynamically =====
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

})();

