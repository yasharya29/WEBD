$(document).ready(function () {

    /*   $('p').click(function () {
          console.log("You clicked on:", this);
          $(this).hide();
      }); */

    // $('three').click()

    $('#but').on(

        {
            click: function () {
                $('#paragraph').toggle();
            }

        }
    )
});