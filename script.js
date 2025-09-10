const hamburger = document.querySelector('.hamburger');
const navContent = document.querySelector('.nav-content');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  navContent.classList.toggle('show');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-content a').forEach(link => {
  link.addEventListener('click', () => {
    navContent.classList.remove('show');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navContent.contains(e.target) && !hamburger.contains(e.target)) {
    navContent.classList.remove('show');
  }
});
