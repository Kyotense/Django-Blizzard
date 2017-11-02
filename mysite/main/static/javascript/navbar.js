$(document).ready(function() {
  var stickyNavTop = $(".container2").offset().top;

  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $(".container2").addClass("vanish");
      $('.container:hidden').slideDown();

    } else {
      $('.container:visible').slideUp();
      $(".container2").removeClass("vanish");
    }
  };
  //stickyNav()
  $(window).scroll(function() {
    stickyNav();
  });


});
