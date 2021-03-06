// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(document).ready(function(){
    $('.ht-section-text-js').typed({
        strings: ['We are providing alot of things for your business need']
    });
    $('.hpas-section-item').hover(
        function(){
            $(this).find('.hpas-section-item-bg-image').addClass('hpas-section-item-bg-image-hover');
            $(this).find('.hpas-section-item-read-more-hr').addClass('hpas-section-item-read-more-hr-hover');
        },
        function(){
            $(this).find('.hpas-section-item-bg-image').removeClass('hpas-section-item-bg-image-hover');
            $(this).find('.hpas-section-item-read-more-hr').removeClass('hpas-section-item-read-more-hr-hover');
        }
    );
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.navbar-fixed-top').addClass('navbar-afterScroll')
        } else{
            $('.navbar-fixed-top').removeClass('navbar-afterScroll')
        }
    });
});
