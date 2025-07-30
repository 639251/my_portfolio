// Mobile navbar toggle
document.getElementById('mobile-menu').addEventListener('click', function () {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('active');
});

  
document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectDesc = btn.previousElementSibling;
    const shortText = projectDesc.querySelector('.short-text');
    const fullText = projectDesc.querySelector('.full-text');
    
    if (fullText.style.display === 'inline') {
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

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  const icon = menuToggle.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times'); // change hamburger to X
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars'); // back to hamburger
  }
});
