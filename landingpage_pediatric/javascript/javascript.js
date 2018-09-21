$(document).ready( function() {

    var movedToTop = $(".fas.fa-arrow-alt-circle-up");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 2 ) {
          $(".navigation-top").addClass("navigation-top-scrolled");
        } else {
            $(".navigation-top").removeClass("navigation-top-scrolled");
        }
    });
});