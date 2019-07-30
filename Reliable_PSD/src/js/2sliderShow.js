$(function() {

    $("#gallery img:gt(0)").hide();

    $("#gallery img").click(function() {

        $("#gallery img:first").fadeOut(1000)
            .next().fadeIn(1000).end().appendTo("#gallery")

    });

});