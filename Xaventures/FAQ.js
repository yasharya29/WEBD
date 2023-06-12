
$(document).ready(function () {

    $(".but").click();

    $('.menu').click(function () {

        $('.menu-button').click();

    });

    $(".but").click(function () {
        var $question = $(this).closest(".question");
        var $answer = $question.find(".answer");
        var $plus = $question.find(".plus");

        // Close previously opened buttons and hide their answers
        $(".question").not($question).find(".answer").hide(100);
        $(".but").not(this).removeClass("active");
        $(".question .plus").show();

        // Toggle the visibility of the clicked button's answer
        $answer.toggle(100);

        // Hide the plus element of the clicked question
        $plus.hide();
        $(this).toggleClass("active");
    });

});
/* 

$(".but").click(function () {
    var $question = $(this).closest(".question");
    var $answer = $question.find(".answer");

    // Close previously opened buttons and hide their answers
    $(".question").not($question).find(".answer").hide(100);
    $(".but").not(this).removeClass("active");


    // Toggle the visibility of the clicked button's answer
    $answer.toggle(100);

    // Toggle the active class on the current button
});
 */