
$(window).on("load resize", function () {
    if ($(window).width() <= 960) {
        $(".nav-list").addClass("mob");
        $(".mobile-icon").click(function () {
            $(".mob").toggle();
        })
    } else {
        $(".mob").css("display", "flex");
        $(".nav-list").removeClass("mob");
    }
});



$(function(){
    $('#slider').rbtSlider({
        height: '1024px', 
        'dots': true,
        'arrows': true,
        'auto': 3
    });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
