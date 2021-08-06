$(document).ready(function () {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 1007) {
            $('.mob').removeClass('hide');
            $('.desktop').addClass('hide');
        }
        else if (ww > 1007) {
            $('.mob').addClass('hide');
            $('.desktop').removeClass('hide');
        }
    }

    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        // autoplaySpeed: 1000,
        dots: true,

        nav: true,

    });


})