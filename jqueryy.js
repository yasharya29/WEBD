$(document).ready(function () {

    /*   $('p').click(function () {
          console.log("You clicked on:", this);
          $(this).hide();
      }); */

    // $('#three').click()

    $('#but').on(

        {
            click: function () {
                $('#paragraph').toggle();
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
    var ogw = $('#parahraph').width;
    var ogh = $('#parahraph').height;

    $('#but3').on(
        {
            click: function () {
                $('#paragraph').animate({


                }, "fast");
            }
        }
    )
});