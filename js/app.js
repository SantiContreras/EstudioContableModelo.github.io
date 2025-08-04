$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    });

    $('.project-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 1000,
        autoplay: true,
        margin: 24,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                items: 1,
                center: true,   
            },
            768: {
                items: 2
            },
            1140: {
                items: 2,
                center:true,
                dots: true

            }
        }
    })
});