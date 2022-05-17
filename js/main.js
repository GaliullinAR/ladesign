const headerTop = document.querySelector('.header__top');
const burgerBtn = document.querySelector('.burger');
const burgerContent = document.querySelector('.burger__content');

burgerBtn.addEventListener('click', () => {
  headerTop.classList.toggle('--active');
})