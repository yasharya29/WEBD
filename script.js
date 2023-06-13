$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $("#menu").toggle(400);
    });
    jQuery('.cardarea').slick({
        slidesToShow: 3,
        arrows: true,
        dots: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {

                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 950,
                settings: {

                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]

    });
    setInterval(function () {
        $(".slick-next").click();
    }, 3000);

});








