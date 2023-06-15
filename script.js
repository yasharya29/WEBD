$(document).ready(function () {
    /*****************************************************************************/
    $('.menu').click(function () {
        $(this).toggleClass('open');
        $("#burger").toggle(00);
    });
    $('#burgeritem a').click(function () {
        $('.menu').removeClass('opened');
        $("#burger").toggle(0);

    });
    /*********************************************************************************/
    $('.questioncard').on('click', function () {
        var answer = $(this).find('.answer');
        var plus = $(this).find('.plus');

        if (answer.is(':visible')) {
            answer.slideUp(200);
            plus.text('+');
        } else {
            $('.questioncard .answer').slideUp(200);
            $('.questioncard .plus').text('+');
            answer.slideDown(200);
            plus.text('-');
        }
    });
    /****************************************************************************/

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
    /********************************************************************************* */

    setInterval(function () {
        $(".slick-next").click();
    }, 3000);





});