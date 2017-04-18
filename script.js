window.onscroll = function() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var windowHeight = window.innerHeight;

    var imageElements = document.getElementsByClassName('image');

    for (var i = 0; i < imageElements.length; i++) {
        var el = imageElements[i];
        var elHeight = el.offsetHeight;
        var rect = el.getBoundingClientRect();

        // When div comes up from the bottom of the viewport
        var fadeDivInFromBottom = el.offsetTop - scrollTop - (windowHeight - elHeight);
        // When div scrolls off to the top of the viewport
        var fadeDivOutToTop = scrollTop - el.offsetTop;

        // Get max of the two scenarios
        var numerator = Math.max(fadeDivInFromBottom, fadeDivOutToTop);

        // Calculate opacity
        var opacity = 1 - (numerator / (elHeight/2));

        // Adjust opacity to make sure it's between 0 and 1
        opacity = opacity < 0 ? 0 : opacity;
        opacity = opacity > 1 ? 1 : opacity;

        // Set element opacity
        el.style.opacity = opacity;

        // If scrolled all the way to bottom, then scroll up to top
        if (i === imageElements.length - 1) {
            if (rect.bottom - 50 < windowHeight) {
                window.scrollTo(0,0);
            }
        }
    }
};

//
// //var el = document.getElementById('imageFour');
// var el = document.getElementById('imageFive');
// //var el = document.getElementById('imageOne');
//

// var gridTop = windowHeight * 0.3;
// var gridBottom = windowHeight * 0.6;
//
// var thisTop = rect.top - window.pageYOffset;
// var string = '';
//
// switch(true) {
//     case (rect.top + gridTop >= windowHeight):
//         //testEq = 1 - (scrollTop - el.offsetTop + gridTop) / (elHeight/2);
//         string = 'div off bottom';
//         break;
//     case (Math.abs((rect.top + elHeight/2) - windowHeight/2) < gridTop):
//         //console.log(rect.top);
//         string = 'div in center';
//         break;
//     case ((rect.top + elHeight) <= gridTop):
//         testEq = 1 - (el.offsetTop - scrollTop - gridBottom) / (elHeight/2);
//         break;
// }