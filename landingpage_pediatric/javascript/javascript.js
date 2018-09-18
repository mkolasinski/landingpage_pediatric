$(document).ready( function() {

    var sharedMobile = $(document).width() > 426;
    var sharedTablet = $(document).width() > 767;

    if ( sharedMobile ) {
        $(".fas.fa-bars").on("click", function() {
            $(this).toggleClass("far fa-times-circle");
            $(".mobile-menu").toggle();
        });
    }

});