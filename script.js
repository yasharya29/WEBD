$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $("#menu").toggle(200);
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

    $('#menu').click(function () {

        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click();

    });

    $(".but").click(function () {
        var $question = $(this).closest(".question");
        var $answer = $question.find(".answer");
        var $plus = $question.find(".plus");

        // Close previously opened buttons and hide their answers
        $(".question").not($question).find(".answer").hide(00);
        $(".but").not(this).removeClass("active");
        $(".question .plus").show();

        // Toggle the visibility of the clicked button's answer
        $answer.toggle(00);

        // Hide the plus element of the clicked question
        $plus.hide();
        $(this).toggleClass("active");
    });
});








