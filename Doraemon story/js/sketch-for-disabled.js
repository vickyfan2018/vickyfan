$(document).ready(function(){
       
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
  $("#error").fadeIn();
        setTimeout(function () {
       window.location.href = "fail.html";
    }, 1000); 
}



    