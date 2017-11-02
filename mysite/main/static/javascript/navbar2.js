$(window).scroll(function(e){
    if ($(this).scrollTop() > 30) { // choose the value you want.
        $('.container:hidden').slideDown();
    } else {
        $('.container:visible').slideUp();
    }
});
