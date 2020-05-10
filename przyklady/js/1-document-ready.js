'use strict';

// jquery ready działa jak addEventListener gdzie eventem jest załadowanie strony
/* $( document ).ready( function() {
    console.log('Działa!'); 
});

$( function() {
    console.log('Działa x2!');
}); */

jQuery( function() {
    let first = $('#first'); // tak można zrobić sobie obiekt jquerowy
    console.log(first);
    first.css( {background: 'red'} ).hide( 'slow' ).show( 3000 );
});

/* $('#first')
    .css( {background: 'red'} )
    .hide( 'slow' )
    .show( 3000 ) */
// poniższe pójdzie pierwsze, bo jest wywoływane w trakcie ładowania strony
console.log('To się wyświetli pierwsze.');