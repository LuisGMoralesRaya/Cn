document.addEventListener('DOMContentLoaded', () => {
  function erSwiperInfographic() {
    const seeMoreButtons = document.querySelectorAll('.js-er-infographics-see-more');
    if (seeMoreButtons) {
      seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
          button.style.display = 'none';
          const seeLessButton = button.parentNode.querySelector('.js-er-infographics-see-less');
          seeLessButton.style.display = 'flex';
          const img = button.parentNode.querySelector('img');
          img.style.opacity = '0.1';
        });
      });
    }
    const seeLessButtons = document.querySelectorAll('.js-er-infographics-see-less');
    if (seeLessButtons) {
      seeLessButtons.forEach(button => {
        button.addEventListener('click', () => {
          button.style.display = 'none';
          const seeMoreButton = button.parentNode.querySelector('.js-er-infographics-see-more');
          seeMoreButton.style.display = 'flex';
          const img = button.parentNode.querySelector('img');
          img.style.opacity = '1';
        });
      });
    }

    new Swiper(".er-swiper-infography", {
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      allowTouchMove: false,
      navigation: {
        nextEl: ".swiper-button-next.er-swiper-infography",
        prevEl: ".swiper-button-prev.er-swiper-infography",
      },
      // pagination: {
      //   el: ".er-swiper-infography-pagination",
      //   clickable: true,
      // },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        340: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        541: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        924: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });
  }
  erSwiperInfographic();
});