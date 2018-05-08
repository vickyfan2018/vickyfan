new WOW().init();
 AOS.init();




$( ".icon" ).click(function() {
  $( ".nav-list" ).toggleClass( "responsive",800, "easeOutQuint" );
  
});
 


// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 80);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('click', '.nav-hover', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

if (matchMedia) {
  const mq = window.matchMedia("(max-width: 450px)");
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

function changebg() {
  var urlString = 'url(./image/' + 20 + '.gif)';
  document.getElementById("opening").style.backgroundImage = urlString;  
}


$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});




function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dashoffset", lineLength);
  }

  var $word = $("polyline");

  // prepare SVG
  pathPrepare($word);


  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = new TimelineMax()
    .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
   

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
          .setTween(tween)
    
          .addTo(controller);
