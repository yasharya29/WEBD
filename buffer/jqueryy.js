$(document).ready(function () {

    /*   $('p').click(function () {
          console.log("You clicked on:", this);
          $(this).hide();
      }); */

    // $('#three').click()

    $('#but').on(

        {
            click: function () {
                $('#paragraph').toggle(1000, function () {
                    alert("Callback function called,if you don't write function in second argument then it will execute this first")
                });
            }

        }
    )
    $('#but1').on(

        {
            click: function () {
                $('#paragraph').slideToggle();
            }

        }
    )
    $('#but2').on(

        {
            click: function () {
                $('#paragraph').animate({
                    height: '150px',
                    width: '200px',

                }, "fast");
            }

        }
    )


    $('#but3').on(
        {
            click: function () {
                $('#paragraph').fadeToggle("fast");
            }
        }
    )
    $('#but4').on(
        {
            click: function () {
                $('#paragraph').fadeToggle(0).css("font-family", "Papyrus").fadeToggle(1000);
            }
        }
    )
    $("#but5").click(function () {
        alert("Text: " + $("#paragraph").text());
    });

    $("#but6").click(function () {
        alert("HTML: " + $("#paragraph").html());
    });
    $("#but7").click(function () {
        alert("Value: " + $("#fname").val());
    });


    $(document).ready(function () {
        $("input").focus(function () {
            $(this).css("background-color", "yellow");
        });
        $("input").blur(function () {
            $(this).css("background-color", "green");
        });
    });
    $("p").on({
        mouseenter: function () {
            $(this).css("background-color", "white");
        },
        mouseleave: function () {
            $(this).css("background-color", "white");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        },
        dblclick: function () {
            $(this).css("background-color", "red");
        }
    });
});