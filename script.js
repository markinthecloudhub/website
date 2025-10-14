// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}
