$(document).ready( function() {
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-128515459-1');
  
    $(window).scroll(function() {
        if ($(this).scrollTop() > 2 ) {
          $(".navigation-top").addClass("navigation-top-scrolled");
        } else {
            $(".navigation-top").removeClass("navigation-top-scrolled");
        }
    });

    $(".fas.fa-angle-down").on("click", function() {
        $(this).hide(300);
        $(".fas.fa-angle-up").show(300);
        $(".other_language").show();
        $(".overlay").show();
    });

    $(".fas.fa-angle-up").on("click", function() {
        $(this).hide(300);
        $(".fas.fa-angle-down").show(300);
        $(".other_language").hide(300);
        $(".overlay").hide();
    });

    $(".overlay_if_scrolled").on("click", function() {
        $(this).hide(300);
        $(".fas.fa-angle-up").css("display","none");
        $(".fas.fa-angle-down").css("display","block");
        $(".other_language").hide(300);
    });

    $(".far.fa-times-circle").on("click", function() {
        $(".cookies").fadeOut(500);
    });

    $(".cookies p").on("click", function() {
        $(".policy").fadeIn(400);
        $(".overlay").show().css("top","0px").css("z-index","10");
    });

    $(".fas.fa-window-close").on("click", function() {
        $(".policy").fadeOut(400);
        $(".overlay").fadeOut();
    });

    $(".overlay").on("click", function() {
        $(".policy").fadeOut(400);
        $(".overlay").fadeOut(400);
    });
});