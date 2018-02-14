$(document).ready(function(){
       
       $("#draggable").click(function(){
        $("#error").fadeIn();
        setTimeout(function () {
       window.location.href = "fail.html";
    }, 1000); 
            
        });
    });

    