// === Mobile Menu Toggle ===
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  // Toggle menu visibility
  smallMenu.classList.toggle('header__sm-menu--active');

  // Toggle hamburger icon and close icon
  headerHamMenuBtn.classList.toggle('d-none');
  headerHamMenuCloseBtn.classList.toggle('d-none');
});

// === Close mobile menu when any link is clicked ===
headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
});

// === Redirect to homepage on logo click ===
const headerLogoContainer = document.querySelector('.header__logo-container');

if (headerLogoContainer) {
  headerLogoContainer.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
