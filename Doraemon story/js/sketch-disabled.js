$(function() {
        $('body').fadeIn();
        $("#draggable").draggable();
        $("#droppable").droppable({
        	
            drop: function(event, ui) {
                $("#droppable").fadeOut();
                $("#draggable").fadeOut();
                $("#my_audio").get(0).play();
                    $('body').fadeOut();
                 setTimeout(function () {
       window.location.href = "drag-on-mouth-disabled.html";
    }, 500); 
            }
        });
    });



    