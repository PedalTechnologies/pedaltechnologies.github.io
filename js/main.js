$("#about-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#work-button, .down").click(function() {
    $('html,body').animate({
        scrollTop: $("#barnard").offset().top},
        'slow');
});