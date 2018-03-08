new WOW().init();
$(document).ready(function(){
  
  $('.product-card').hover(function(){
      $(this).addClass('animate');
    },function(){
      $(this).removeClass('animate'); 
  });
  
  $('.flipper').click(function(){
    var rotatecx = $(this).find('.cx');
    var rotatecy = $(this).find('.cy');
      $(this).addClass('animate');
    setTimeout(function(){ 
    $(rotatecx).css({
      "transform": "rotate(45deg)",
      "transition":"all 0.3s ease-in-out"
      });}, 300);
  setTimeout(function(){ 
    $(rotatecy).css({
      "transform": "rotate(-45deg)",
      "transition":"all 0.3s ease-in-out"
      });}, 300); 

  $('.flip-back').click(function(){
 var par = $(this).parents('.flipper.animate');
    setTimeout(function(){ 
      $(par).removeClass('animate');}, 100);
  });
  return false;
  });
  
}); 
function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "nav-list") {
        x.className += " responsive";
    } else {
        x.className = "nav-list";
    }
}