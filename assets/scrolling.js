$(document).ready(function() {
    var scrollLink = $("a.js-scroll-trigger");
  
    // Hide #mainNav when the page first loads
    $("#mainNav").addClass("hidden");
  
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
  
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
  
      if (scrollbarLocation == 0) {
        // if scrollbar is at the top of the page, hide #mainNav
        $("#mainNav").addClass("hidden");
        return;
      }
  
      scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top - 20;
        if ( sectionOffset <= scrollbarLocation ) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
        // Show #mainNav when it has the navbar-shrink class
        $("#mainNav.navbar-shrink").removeClass("hidden");
      });
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  });
  