$(document).ready(function(){
       $('body').fadeIn();
       $("#draggable").draggable(function(){
        
            
        });
$( init );
       function init() {
  $('#draggable').draggable( {
stop: handleDragStop
  } );
}	
    });

function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  $("#my_audio").get(0).play();
  $("#error").fadeIn();
        setTimeout(function () {
           $('#error').fadeOut();
       window.location.href = "fail.html";
    }, 2500); 

    
}



    