'use strict';

$( function() {
    let btn = $('#event');
    // console.log(btn);
    /* btn.click(function() {
        console.log('klikło');
    });

    btn.on('dblclick', function() {
        console.log('klikło x2');
    }); */

    // dzięki '.on()' możemy łatwo podpiąć kilka eventów

    btn.on({
        'click': function() {
            console.log('klikło x1');
        },
        'dblclick': function() {
            console.log('klikło x2');
        },
        'mouseenter': function() {
            $(this).css({'color': 'red'});
        },
        'mouseleave': function() {
            $(this).css({'color': 'black'});
        }
    });
} );