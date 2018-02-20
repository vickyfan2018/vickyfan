
$(document).ready(function(){	
var my4Element = $('.section-4');
var my3Element = $('.section-3');
var my2Element = $('.section-2');
var my6Element = $('.section-5');
var my6Element = $('.section-6');
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    my4Element.css({
        'opacity' :4.5 - st/600
    });
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    my3Element.css({
        'opacity' :3 - st/600
    });
  });
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    my2Element.css({
        'opacity' :2 - st/600
    });
  });
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    my5Element.css({
        'opacity' :5 - st/600
    });
  });
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    my6Element.css({
        'opacity' :6 - st/600
    });
  });
});

  new WOW().init();
});