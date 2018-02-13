$(function() {
        $("#draggable").draggable();
        $("#droppable").droppable({
        	
            drop: function(event, ui) {
                $("#droppable").fadeOut();
                $("#draggable").fadeOut();
                 setTimeout(function () {
       window.location.href = "drag-on-mouth.html";
    }, 500); 
            }
        });
    });

var draggable = document.getElementById('draggable');
  draggable.addEventListener('touchmove', function(event) {
    var touch = event.targetTouches[0];
    
    // Place element where the finger is
    draggable.style.left = touch.pageX-25 + 'px';
    draggable.style.top = touch.pageY-25 + 'px';
    event.preventDefault();
  }, false);

    