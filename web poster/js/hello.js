 $(function() {
        $(".my").hover(
            function() {
                $(this).attr("src", "images/omg.gif");
            },
            function() {
                $(this).attr("src", "images/scrolling-animation-2.png");
            }                         
        );                  
    });

 function myFunction() {
    var x = document.getElementById("name").value;
    document.getElementById("showname").innerHTML = x;
    var parent = document.getElementById("container");
    var child = document.getElementById("form-front");
    parent.removeChild(child);

}