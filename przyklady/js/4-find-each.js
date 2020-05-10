'use strict';

$( function() {
    let bodyElem = $('body').find('p').eq(0);
    console.log(bodyElem);

    let paragraphs = $('p');
    console.log(paragraphs);

    // UWAGA! nie używać strzałkowych!
    paragraphs.each(function(index) {
        console.log($(this).text());
    });
} );