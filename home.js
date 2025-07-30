// Mobile navbar toggle
document.getElementById('mobile-menu').addEventListener('click', function () {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('active');
});
 document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.project-card');
      card.classList.toggle('expanded');

      if (card.classList.contains('expanded')) {
        button.textContent = 'Read Less';
      } else {
        button.textContent = 'Read More';
      }
    });
  });
