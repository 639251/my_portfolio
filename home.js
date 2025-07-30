// ===== Mobile Navbar Toggle with Accessibility =====
(function () {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    const icon = menuToggle.querySelector('i');

    function openMenu() {
      navLinks.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-times'); }
      // prevent background scroll on mobile
      document.documentElement.classList.add('no-scroll');
    }

    function closeMenu() {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
      document.documentElement.classList.remove('no-scroll');
    }

    function toggleMenu() {
      if (navLinks.classList.contains('active')) closeMenu();
      else openMenu();
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close on link click (use event delegation)
    navLinks.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) closeMenu();
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      const clickInsideMenu = navLinks.contains(e.target);
      const clickOnToggle = menuToggle.contains(e.target);
      if (!clickInsideMenu && !clickOnToggle && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
  }
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Accessible aria-expanded update
  const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
  menuToggle.setAttribute("aria-expanded", !expanded);
});

  // ===== Read More / Read Less for Project Cards =====
  document.querySelectorAll('.read-more-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      if (!card) return;
      const desc = card.querySelector('.project-description');
      const shortText = desc?.querySelector('.short-text');
      const fullText = desc?.querySelector('.full-text');

      if (!shortText || !fullText) return;

      const showingFull = fullText.style.display === 'inline';

      if (showingFull) {
        fullText.style.display = 'none';
        shortText.style.display = 'inline';
        btn.textContent = 'Read More';
      } else {
        fullText.style.display = 'inline';
        shortText.style.display = 'none';
        btn.textContent = 'Read Less';
      }
    });
  });
})();

