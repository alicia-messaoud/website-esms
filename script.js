// Souligne "Home" ou "Contact" dans le menu selon la partie de la page visible
const anchorLinks = document.querySelectorAll('.nav a[href^="#"]');
const targets = document.querySelectorAll('#home, #contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      anchorLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

targets.forEach((target) => observer.observe(target));