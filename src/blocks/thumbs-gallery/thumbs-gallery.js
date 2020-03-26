(function(){

  var thumbsGalleryThumbs = new Swiper('.thumbs-gallery__thumbs', {
    slidesPerView: 4,
    spaceBetween: 10,
    //loop: true,
    preloadImages: false,
    lazy: true,
    //loop: true,
    freeMode: true,
    loopedSlides: 1, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var thumbsGalleryTop = new Swiper('.thumbs-gallery__top', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    preloadImages: false,
    lazy: true,
    //loop: true,
    loopedSlides: 1, //looped slides should be the same
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
    },
    navigation: {
      nextEl: '.thumbs-gallery__next',
      prevEl: '.thumbs-gallery__prev',
    },
    thumbs: {
      swiper: thumbsGalleryThumbs,
    },
  });

}());
