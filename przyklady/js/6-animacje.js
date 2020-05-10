'use strict';

$( function() {
    let h1 = $('#first');
    let h2 = $('#second');
    let btn = $('#event');
    /* btn.click(function() {
        h1.hide(3000);
        h1.show(2000);
    });
    
    h1.fadeOut(3000);
    h1.fadeIn(2000);

    h1.slideUp(2000);
    h1.slideDown(3000); */

    function animuj() {
        console.log('animacja przeszła!');
    }

    // kolory trzeba zrobić jakoś inaczej, używając external sourców
    h2.animate({
        'font-size': '3em',
        'margin-left': '100px'
    }, {duration: 2000, queue: false}, animuj);
} );