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
});