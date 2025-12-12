$(document).ready(function () {
    // Initialize the slideshow on the element with class 'slideshow'
    $('.slideshow').cycle({
        fx: 'scrollHorz', // Transition effect
        speed: 1000, // Transition speed in milliseconds
        timeout: 3000, // Time between slide transitions in milliseconds
        pauseOnHover: true // Pause the slideshow on hover
    });

});

