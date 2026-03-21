const burgerBtn = document.querySelector('.header-burger-menu');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileMenu = document.querySelector('.mobile-inner');

burgerBtn.addEventListener('click', onBurgerBtnClick);
mobileCloseBtn.addEventListener('click', onMobileCloseBtnClick);
mobileOverlay.addEventListener('click', onMobileOverlayClick);
mobileMenu.addEventListener('click', onMobileMenuClick);

function onBurgerBtnClick() {
  openMobileMenu();
}

function onMobileCloseBtnClick() {
  closeMobileMenu();
}

function onMobileOverlayClick() {
  closeMobileMenu();
}

function openMobileMenu() {
  mobileOverlay.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeMobileMenu() {
  mobileOverlay.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

function onMobileMenuClick(e) {
  e.stopPropagation();
  if (e.target.closest('.mobile-menu-link')) {
    closeMobileMenu();
  }
}
