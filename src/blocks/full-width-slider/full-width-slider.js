(function(){
  var indexFull = new Swiper('.full-width-slider', {
    slidesPerView: 2,
    spaceBetween: 0,
    //loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
