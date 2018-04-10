function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "nav-list") {
        x.className += " responsive";
    } else {
        x.className = "nav-list";
    }
}


if (matchMedia) {
  const mq = window.matchMedia("(max-width: 400px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    document.getElementById("logo").src = "image/123.png";
    document.getElementById("logo").width = "70";

  } else {
    document.getElementById("logo").src = "image/logo.png";
        document.getElementById("logo").width = "250";
  }

}

function changebg(){
  var urlString = 'url(./image/' + 1 + '.gif)';
  document.getElementById("opening").style.backgroundImage = urlString;   
}



