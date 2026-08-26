// ===== Mobile Navbar Toggle with Accessibility =====
(function () {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  const htmlElement = document.documentElement;

  if (menuToggle && navLinks) {
    const icon = menuToggle.querySelector('i');

    function openMenu() {
      navLinks.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      if (icon) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
      htmlElement.classList.add('no-scroll');
    }

    function closeMenu() {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
      htmlElement.classList.remove('no-scroll');
    }

    function toggleMenu() {
      if (navLinks.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.addEventListener('click', (e) => {
      const targetLink = e.target.closest('a');
      if (targetLink) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });

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
      if (!card) return;

      const desc = card.querySelector('.project-description');
      const shortText = desc?.querySelector('.short-text');
      const fullText = desc?.querySelector('.full-text');

      if (!shortText || !fullText) return;

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

  // ===== Dark / Light Theme Toggle =====
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    
    // Check saved preference or system default
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      let newTheme = 'light';
      
      if (currentTheme === 'light') {
        newTheme = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        }
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
      }
      
      localStorage.setItem('theme', newTheme);
    });
  }

  // ===== Typing Animation (Typewriter Effect) =====
  const typedTextSpan = document.getElementById('typed-text');
  if (typedTextSpan) {
    const roles = ["Full-Stack Web Developer", "Problem Solver", "Coder", "Tech Enthusiast"];
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newTextDelay = 2000; // delay between texts
    let roleIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < roles[roleIndex].length) {
        typedTextSpan.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed + 500);
      }
    }

    // Start typing on page load
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(type, 1000);
    });
    // Fallback if DOMContentLoaded already fired
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(type, 1000);
    }
  }

  // ===== Scroll to Top Button =====
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== Certificate Modal Handler =====
  const certModal = document.getElementById('cert-modal');
  const viewCertBtn = document.getElementById('view-cert-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const bodyElement = document.body;

  if (certModal && viewCertBtn && closeModalBtn) {
    function openModal() {
      certModal.classList.add('open');
      certModal.setAttribute('aria-hidden', 'false');
      bodyElement.classList.add('no-scroll');
    }

    function closeModal() {
      certModal.classList.remove('open');
      certModal.setAttribute('aria-hidden', 'true');
      bodyElement.classList.remove('no-scroll');
    }

    viewCertBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

    // Close when clicking outside of modal-content
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeModal();
      }
    });

    // Close on ESC key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && certModal.classList.contains('open')) {
        closeModal();
      }
    });
  }



  // ===== Update Footer Year Dynamically =====
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

})();
