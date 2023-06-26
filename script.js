
$(document).ready(function () {

    $('.slider-wrapper').slick({
        /* dots: true, */
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $(window).scroll(function () {
        var navbar = $('#logo');
        var navLinks = $('.nav-link');

        if ($(window).scrollTop() > 100) {
            setTimeout(function () {
                navbar.addClass('expanded');
            });
        } else {
            setTimeout(function () {
                navbar.removeClass('expanded');
            });
        }
    });
    $(window).scroll(function () {
        var navbar = $('.navbar');
        var navLinks = $('.nav-link');

        if ($(window).scrollTop() > 100) {
            setTimeout(function () {
                navbar.addClass('expanded');
            });
        } else {
            setTimeout(function () {
                navbar.removeClass('expanded');
            });
        }
    });
    var btn = $('#buttton');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });



});
