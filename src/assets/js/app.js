$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {
  $('.js-select').select2({
    language: "ru",
    minimumResultsForSearch: -1
  });
});

$(() => {
  $('.tabs__content-item:not(:first-child)').hide();
  $('.tabs__content-item:first-child').addClass('active');
  $('.tabs__list-item:first-child').addClass('active');
  $('.tabs__list > .tabs__list-item').click(function tabListLiClick() {
    if (!($(this).hasClass('active'))) {
      const thisLi = $(this);
      const numLi = thisLi.index();
      thisLi.addClass('active').siblings().removeClass('active');
      thisLi.parent().next().children('div').hide().removeClass('active')
          .eq(numLi)
          .addClass('active')
          .fadeIn('slow');
    }
  });
});

$(() => {

  const productsThumbs = new Swiper('.products__thumbs', {
    speed: 600,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  const productsSlider = new Swiper('.products__slider', {
    navigation: {
      nextEl: '.products .swiper-button-next',
      prevEl: '.products .swiper-button-prev',
    },
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 600,
    thumbs: {
      swiper: productsThumbs
    },
    // breakpoints: {
    //   0: {
    //     autoHeight: true
    //   },
    //   768: {
    //     autoHeight: false
    //   },
    // }
  });
});

$(() => {
    $('[data-fancybox]').fancybox({
      animationDuration: 600,
      animationEffect   : 'slide-in-in',
      touch: false
    });
});


$(() => {
    $('.questions__item-top').on('click', function () {
      if($(this).parent('.questions__item').hasClass('active')){
        $(this).parent('.questions__item').removeClass('active').find('.questions__item-dropdown').slideUp();
      } else {
        $('.questions__item').parent('.questions__item').removeClass('active').find('.questions__item-dropdown').slideUp();
        $(this).parent('.questions__item').toggleClass('active').find('.questions__item-dropdown').slideToggle()
      }
    })
});

$('input[type="tel"]').mask("+7 ( 999 ) - 999 - 99 - 99");


$(() => {
  $('.js-toggle-menu').on('click', function toggleMenu() {
    $('body').toggleClass('show-menu');
  });


  $(document).on('click', function(event) {
    var $target = $(event.target);
    if(!$target.closest('.header').length &&
        $('body').hasClass('show-menu')) {
      $('body').removeClass('show-menu');
    }
  });
});


$(() => {
  $('.js-anchor-link').on('click', function anchorLinkClick (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    console.log(top);
    $('body,html').animate({scrollTop: top}, 800);
  });
});
