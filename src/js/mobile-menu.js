const burgerBtn = document.querySelector('.header-burger-menu');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileMenu = document.querySelector('.mobile-inner');

burgerBtn.addEventListener('click', openMobileMenuHandler);
mobileCloseBtn.addEventListener('click', closeMobileMenuHandler);
mobileOverlay.addEventListener('click', closeMobileMenuHandler);
mobileMenu.addEventListener('click', scrollToSection);

function openMobileMenuHandler() {
  mobileOverlay.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeMobileMenuHandler() {
  mobileOverlay.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

function scrollToSection(e) {
  e.stopPropagation();
  if (e.target.closest('.mobile-menu-link')) {
    closeMobileMenuHandler();
  }
}
