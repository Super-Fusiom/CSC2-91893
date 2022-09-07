$(window).bind('scroll', function() {
    if($(window).scrollTop() >= $('#chalet').offset().top - 50) {
        $('#chalet').color('black');
    }
});
