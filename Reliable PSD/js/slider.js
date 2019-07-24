"use strict";



// const sliderCarosel = function() {
//     let $slide = $(".slider-image").eq(currentSlide);;
//     let y = ($slide.attr("id") == 3) ? $("#1") : $slide.next();
//     y.fadeIn(500, function() {
//         $slide.fadeOut(500);
//     });
// };

function sliderCarosel() {
    let $slideCurrent = $('.slider-image').eq(currentSlide);
    let $slideNext = ($slides.attr("id") == $slideCurrent) ? $("#1") : $slides.next();
    $slideNext.fadeIn(500, function() {
        $slideCurrent.fadeOut(500);
    });
}

let currentSlide = 0;
// Store all slides
const $slides = $('.slider-images li');
// Store total number of slides
const $totalSlides = $slides.length;



// call click function when next button is clicked
$('.next').click(function() {
    // update current slide index
    currentSlide += 1;
    // if on last slide, resent index to 0
    if (currentSlide > $totalSlides - 1) {
        currentSlide = 0;
    }
    console.log(currentSlide);
    // run cycle slides function to display slide
    sliderCarosel();
});

// call click function when prev button is clicked
$('.previous').click(function() {
    // update current slide index
    currentSlide -= 1;
    // if on first slide, move to last slide
    if (currentSlide < 0) {
        currentSlide = $totalSlides - 1;
    }

    // run cycle slides function to display slide
    sliderCarosel();
});