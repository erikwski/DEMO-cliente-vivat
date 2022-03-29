$(document).ready(function () {
  //Loader
  $(window).load(function () {
    setTimeout(() => {
      $(".loader-overlay").fadeOut("slow");
    }, 1000);
  });

  $("a[data-rel^=lightcase]").lightcase();

  // Instantiate MixItUp
  $(".portfolio-items").mixItUp({
    animation: {
      duration: 300,
    },
  });

  // Carousels
  $(".cl-client-carousel").owlCarousel({
    pagination: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: true,
  });

  $(".cl-logo-carousel").owlCarousel({
    items: 6,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [979, 3],
    stopOnHover: true,
    autoPlay: 3000,
  });

  $(".header-carousel").owlCarousel({
    pagination: true,
    navigation: true, // Show next and prev buttons
    slideSpeed: 500,
    paginationSpeed: 500,
    singleItem: true,
    autoPlay: true,
  });

  // Header Changer on Scroll
  $(function () {
    //caches a jQuery object containing the header element
    var header = $(".header-home");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
        header.removeClass("header-home").addClass("header-default");
      } else {
        header.removeClass("header-default").addClass("header-home");
      }
    });
  });

  //Header Class Change on Resize
  var $window = $(window);

  // Function to handle changes to style classes based on window width
  function checkWidth() {
    if ($window.width() < 767) {
      $("#top-header").removeClass("header-home").addClass("header-default");
    }

    if ($window.width() >= 767) {
      $("#top-header").removeClass("header-default").addClass("header-home");
    }
  }

  // Execute on load
  window.scrollTo(0, 0);
  checkWidth();

  // Bind event listener
  $(window).resize(checkWidth);

  setTimeout(() => {
    AOS.init({
      once: true,
      offset: 200,
      duration: 800,
    });
  }, 1500);
});
