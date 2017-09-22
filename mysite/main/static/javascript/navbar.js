$(document).ready(function() {
  var stickyNavTop = $(".container").offset().top;

  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $(".container").stop().addClass("sticky").css("top", "-50px").animate({
        'top': "0px"
      }, 500);
    } else {
      $(".container").removeClass("sticky");
    }
  };
  stickyNav()
  $(window).scroll(function() {
    stickyNav();
  });


});
