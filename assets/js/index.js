// navbar hide and show
$(document).ready(function () {
    var btn = $('#BackToTop');

    $(window).scroll(function () {
        //after x distance from top fades in, otherwise fade out 
        if ($(this).scrollTop() > 400) {
            $('#Navbar').fadeIn(500);
            btn.addClass('show');
        } else {
            $('#Navbar').fadeOut(500);
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });


});

(jQuery);

