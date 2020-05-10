'use strict';

// obiektJQuery.text() - zwraca obecny tekst lub zamienia go na ten podany jako argument

$( function() {
    let classPar = $( '.paragraf' );
    console.log(classPar.text());

    let classParNext = $( '.paragrafnext' );
    classParNext.html('zamieniam tekst na <strong>taki właśnie</strong>');
    
    // dodawanie tekstu:
    classParNext.before('before');
    classParNext.prepend('prepend');
    classParNext.append('append');
    classParNext.after('after');

    // console.log(classParNext.css('color', 'red'));

    /* classParNext.css('color', 'red');
    classParNext.css('font-size', '3em'); */

    // skrócony zapis tego powyżej: (używaj obiektów, są dobre!!!)
    classParNext.css({
        'color': 'red',
        'font-size': '3em',
    });
} );