const sliderCarosel = function() {
    let x = $(".bxslider li:visible");
    let y = (x.attr("id") == 3) ? $("#1") : x.next();
    y.fadeIn(1500, function() {
        x.fadeOut(1500);
    });
};