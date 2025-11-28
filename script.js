// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Update footer year where present
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});
