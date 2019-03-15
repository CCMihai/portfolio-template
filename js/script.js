$(function(){
    $('.navbar, .nav').click(function(){
        $('.navbar').toggleClass('navbar-on');
        $('.nav').slideToggle("slow");
        $('.nav').removeClass('nav-hide');
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 50){  
        $('nav').addClass("navbar-fixed-top");
    }
    else{
        $('nav').removeClass("navbar-fixed-top");
    }
});

$(document).ready(function(){
  $('.bxslider').bxSlider({
  buildPager: function(slideIndex){
    switch(slideIndex){
      case 0:
        return '<i class="fa fa-handshake-o"></i>';
      case 1:
        return '<i class="fa fa-archive"></i>';
      case 2:
        return '<i class="fa fa-lightbulb-o"></i>';
      case 3:
        return '<i class="fa fa-laptop"></i>';
      case 4:
        return '<i class="fa fa-globe"></i>';
    }
  }
});
});



// portfolio script
$('.project-categories li > a').on('click', function(event)
        {
            $('.project-categories li > a').removeClass('active');
            $(this).addClass('active');
        });

    /* Event - Window Resize /- */
    $(window).resize(function()
    {
        /* Window Hight Set to Elements /- */
        var window_height = $(window).height();
        var window_width = $(window).width();
        // $(".header").css("height", window_height + "px");
    });
    /* Event - Window Resize /- */
    
    var $itemsHolder = $('.project-list');
    var $itemsClone = $itemsHolder.clone(); 
    var $filterClass = "";
    $('.project-categories li').click(function(e)
    {
        e.preventDefault();
        $filterClass = $(this).attr('data-value');
        if($filterClass == 'all')
        {
            var $filters = $itemsClone.find('li');
        }
        else
        {
            var $filters = $itemsClone.find('li[data-type='+ $filterClass +']');
        }
        $itemsHolder.quicksand(
        $filters,
        {
            duration: 1000
        });
    }); 


// google map script
var myCenter = new google.maps.LatLng(47.156674, 27.576018);

function initialize() {
var mapProp = {
center:myCenter,
zoom:15,
scrollwheel:false,
draggable:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
            icon: 'images/map-marker.png',
            map: map,
            position: map.getCenter() 
            });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize); 


// script for smooth scroll
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  // Add smooth scrolling to all links in page link
  $("a, a[href='#page-top']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

// script for animation
$(window).scroll(function(){
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 650) {
          $(this).addClass("slide");
        }
    });
  });

// go to top
$(window).scroll(function(e) {
                if ($(this).scrollTop() > 700){  
                    $('.goto-top').addClass("show");
                }
                else{
                    $('.goto-top').removeClass("show");
                }
            });

// modal
$(document).ready(function(){
    $("#btnModal").click(function(){
        $("#modal").modal();
    });
});
