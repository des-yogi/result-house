(function(){
  var indexFull = new Swiper('.full-width-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    preloadImages: false,
    lazy: true,
    navigation: {
      nextEl: '.full-width-slider__next',
      prevEl: '.full-width-slider__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      768: {
        slidesPerView: 1.55
      },
      1366: {
        slidesPerView: 1.4
      },
      1920: {
        slidesPerView: 1.5
      }
    }
  });
}());
