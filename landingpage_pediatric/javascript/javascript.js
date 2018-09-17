$(document).ready( function() {

    // slide to convenient section
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 650);
        }
    });

    $(".hamburger-menu").click( function() {
        $(".mobile-menu").show();
    });

});