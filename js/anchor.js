// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     const blockID = anchor.getAttribute('href').substr(1);

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   });
// }

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Отримуємо ідентифікатор без шляху
    const href = anchor.getAttribute('href');
    const blockID = href.includes('#') ? href.split('#')[1] : '';

    const targetElement = document.getElementById(blockID);

    // Перевіряємо, чи елемент існує
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.warn(`Element with id "${blockID}" not found.`);
    }
  });
}
