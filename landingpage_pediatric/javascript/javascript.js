$(document).ready( function() {

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