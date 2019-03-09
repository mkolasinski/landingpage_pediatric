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

    // based polish version
    $(".fas.fa-angle-down").on("click", function() {
        $(this).hide(300);
        $(".fas.fa-angle-up").show(300);
        $(".nsk").show();
    });

    $(".fas.fa-angle-up").on("click", function() {
        $(this).hide(300);
        $(".fas.fa-angle-down").show(300);
        $(".nsk").hide(300);
    });
});