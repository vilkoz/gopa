$('.collapse__head').click(function(e) {
    e.preventDefault();

    var $this = $(this);
    if ($this.next().hasClass('open')) {
        $this.next().removeClass('open');
        $this.next().slideUp(350);
        $this.toggleClass('open');
    } else {
        $this.parent().find('.collapse__body').removeClass('open');
        $this.parent().find('.collapse__body').slideUp(350);
        $this.toggleClass('open');
        $this.next().toggleClass('open');
        $this.next().slideToggle(350);
    }
});

var carouselDevices = new Swiper('.devices__carousel', {
    loop: true,
    noSwiping: false,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var carouselArticles = new Swiper('.articles__carousel', {
    loop: false,
    noSwiping: true,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 25,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 1,
        },
        620: {
            loop: true,
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

$('.header__toggle').click(function() {
    $('.menu-mob').addClass('open');
});

$('.menu-mob__close').click(function() {
    $('.menu-mob').removeClass('open');
})
