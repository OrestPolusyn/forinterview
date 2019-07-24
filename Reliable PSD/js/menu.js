"use stcrict";

$(document).ready(function() {
    $('#menu-wrap').append('<div id="menu-trigger"></div>');
    $('#menu-trigger').on('click', function() {
        $('#menu').slideToggle();
    });
});