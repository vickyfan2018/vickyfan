AOS.init({
  duration: 500,
})

function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "nav-list") {
        x.className += " responsive";
    } else {
        x.className = "nav-list";
    }
}








