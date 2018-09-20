$(document).ready( function() {

    $('#about_me').on('click', function (event) {
            window.scrollTo(0,590);
            $(".mobile-menu").hide();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 2 ) {
          $(".navigation-top").addClass("navigation-top-scrolled");
          $(".mobile-menu").addClass("mobile-menu-scrolled");
        } else {
          $(".navigation-top").removeClass("navigation-top-scrolled");
          $(".mobile-menu").removeClass("mobile-menu-scrolled");
        }
      });

    $(".fas.fa-bars").on("click", function() {
        $(this).toggleClass("far fa-times-circle");
        $(".mobile-menu").toggle();
    });

});