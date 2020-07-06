// navbar hide and show
(function($) {          
  $(document).ready(function(){                    
      $(window).scroll(function(){        
                          //after x distance from top fades in, otherwise fade out 
          if ($(this).scrollTop() > 400) {
              $('#Navbar').fadeIn(500);
          } else {
              $('#Navbar').fadeOut(500);
          }
      });
  });
})(jQuery);