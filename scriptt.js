$(document).ready(function () {
    $('.burger-icon').on('click', function () {

        $(".burger").toggle(100);
    });



    $(window).scroll(function () {
        // Get the scroll position
        var scrollPosition = $(window).scrollTop();

        // Show elements based on scroll position
        $(".intro").each(function () {
            var elementOffset = $(this).offset().top;
            if (scrollPosition > elementOffset - $(window).height() + 200) {
                $(this).addClass("show");
            }
        });

        $(".cardcontainer .card").each(function () {
            var elementOffset = $(this).offset().top;
            if (scrollPosition > elementOffset - $(window).height() + 200) {
                $(this).addClass("show");
            }
        });

        $(".info").each(function () {
            var elementOffset = $(this).offset().top;
            if (scrollPosition > elementOffset - $(window).height() + 200) {
                $(this).addClass("show");
            }
        });

        $(".aboutus").each(function () {
            var elementOffset = $(this).offset().top;
            if (scrollPosition > elementOffset - $(window).height() + 200) {
                $(this).addClass("show");
            }
        });

        $(".ourmission").each(function () {
            var elementOffset = $(this).offset().top;
            if (scrollPosition > elementOffset - $(window).height() + 200) {
                $(this).addClass("show");
            }
        });
    });
});
