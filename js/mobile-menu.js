// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
//       const scrollLockMethod = !isMenuOpen
//         ? 'disableBodyScroll'
//         : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);

//     // Закрываем мобильное меню на более широких экранах
//     // в случае изменения ориентации устройства.
//     // Close the mobile menu on wider screens if the device orientation changes
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
//   })();

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const navLinks = document.querySelectorAll(
    '.js-menu-container .mobile-menu__link',
  ); // Пункти меню
  const bodyScrollLock = window.bodyScrollLock || {}; // Перевірка наявності бібліотеки

  // Функція для відкриття/закриття меню
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (bodyScrollLock.disableBodyScroll && bodyScrollLock.enableBodyScroll) {
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    }
  };

  // Відкриття/закриття меню при натисканні на кнопки
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закриття меню при натисканні на пункт навігації
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Закриваємо меню
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      if (bodyScrollLock.enableBodyScroll) {
        bodyScrollLock.enableBodyScroll(document.body);
      }
    });
  });

  // Закриваємо мобільне меню на більш широких екранах при зміні орієнтації
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    if (bodyScrollLock.enableBodyScroll) {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  });
})();
