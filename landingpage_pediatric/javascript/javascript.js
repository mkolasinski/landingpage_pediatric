$(document).ready( function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 2 ) {
          $(".navigation-top").addClass("navigation-top-scrolled");
        } else {
        $(".navigation-top").removeClass("navigation-top-scrolled");
        }

        if ($(this).scrollTop() > 320 ) {
            $(".fas.fa-arrow-alt-circle-up").show();
        } else {
            $(".fas.fa-arrow-alt-circle-up").hide();
        }
      });

      $(".fas.fa-arrow-alt-circle-up").click(function() {
          $('html').animate(
              { scrollTop: 0}, 400, 'linear'
          );
      });

});