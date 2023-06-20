$(document).ready(function () {
    $('.burger-icon').on('click', function () {
        $(this).toggleClass('menu-open');
        $(".burger").toggle(100);
    });
});