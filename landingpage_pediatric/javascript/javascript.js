$(document).ready( function() {

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 650);
        }
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