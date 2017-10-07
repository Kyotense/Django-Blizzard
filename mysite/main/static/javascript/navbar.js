$(document).ready(function() {
  var stickyNavTop = $(".container").offset().top;

  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $(".container").addClass("sticky");
    } else {
      $(".container").removeClass("sticky");
    }
  };
  //stickyNav()
  $(window).scroll(function() {
    stickyNav();
  });


});
