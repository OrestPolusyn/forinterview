$(function() {

    $("#gallery img:gt(0)").hide();

    $(".next").click(function() {

        $("#gallery img:first").fadeOut(1000)
            .next().fadeIn(1000).end().appendTo("#gallery")

    });

    $(".previous").click(function() {

        $("#gallery img:last").prependTo("#gallery")
            .fadeIn(1000).next().fadeOut(1000)

    });

});