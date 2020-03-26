(function(){

  var schemeSliderThumbs = new Swiper('.scheme-slider__thumbs', {
    spaceBetween: 16,
    slidesPerView: 3,
    //loop: true,
    freeMode: true,
    loopedSlides: 1, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var schemeSliderTop = new Swiper('.scheme-slider__top', {
    spaceBetween: 16,
    autoHeight: true,
    //loop: true,
    loopedSlides: 1, //looped slides should be the same
    navigation: {
      nextEl: '.scheme-slider--btn-next',
      prevEl: '.scheme-slider--btn-prev',
    },
    thumbs: {
      swiper: schemeSliderThumbs,
    },
  });

}());
