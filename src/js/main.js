// Custom scripts

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
  document.querySelector(".menu__body2").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

const gallerySwiper = document.querySelector(".swiper__gallery");
if (gallerySwiper) {
  const swiper = new Swiper(".swiper__gallery", {
    slidesPerView: 3,
    slidesToScroll: 3,
     spaceBetween: 40,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-arrow-next",
      prevEl: ".swiper-arrow-prev",
    },

    // And if we need scrollbar

      // Responsive breakpoints
      breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // 992: {
      //   slidesPerView: 2,
      //   spaceBetween: 30,
      // },
      1210: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
}

// const swiper = new Swiper('.swiper__gallery', {
//   slidesPerView: 3,
//   autoHeight: true,
//   // slidesToScroll: 1,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-arrow-next',
//     prevEl: '.swiper-arrow-prev',
//   },

//   // And if we need scrollbar

// //   // Responsive breakpoints
// //   breakpoints: {
// //   // when window width is >= 320px
// //   320: {
// //     slidesPerView: 3,
// //     spaceBetween: 20
// //   },
// //   // when window width is >= 480px
// //   480: {
// //     slidesPerView: 3,
// //     spaceBetween: 30
// //   },
// // }
// });
