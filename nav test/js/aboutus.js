new WOW().init();
 AOS.init();
 
function myFunction() {
    var x = document.getElementById("top-nav");
    var text=document.getElementById("text-menu");
    var cross=document.getElementById("delete");
    if (x.className === "nav-list") {
        x.className += " responsive";
        text.style.display= "none";
        cross.style.display= "block";
    } else {
        x.className = "nav-list";
        text.style.display= "block";
        cross.style.display= "none";
    }
}
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


if (matchMedia) {
  const mq = window.matchMedia("(max-width: 450px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    document.getElementById("logo").src = "image/123.png";
    document.getElementById("logo").width = "70";

  } else {
    document.getElementById("logo").src = "image/logo.png";
        document.getElementById("logo").width = "250";
  }
}


// var x = window.matchMedia("(max-width: 520px)")
// mediachange(x) // Call listener function at run time
// x.addListener(mediachange) // Attach listener function on state changes

// function mediachange(x) {
// var parent = document.getElementById("second-section");
// var child = document.getElementById("largerthan520");
// var oImg = document.createElement("img");
// var text = document.getElementById("before");
// document.body.appendChild(oImg);
//     if (x.matches) { // If media query matches
//         document.getElementsByTagName("svg")[0].setAttribute("viewBox", "0 -10 500 1300");
//         parent.removeChild(child);
//         oImg.setAttribute('src', './image/ck-old-photo-1(smaller).jpg');
//     oImg.style.flexBasis = '80vw';
//     oImg.style.width = '90vw';
//     parent.insertBefore(oImg,text);
//     } 
//     else {
//        document.getElementsByTagName("svg")[0].setAttribute("viewBox", "0 -10 400 1600");
//        parent.appendChild(child);
      
//     }
// }




// logo animation

$('#lineis').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {
  var basicTimeline = anime.timeline({
    loop:false});
  basicTimeline.add({
  targets: '#lineis .trial .second',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 3000,
       })
    }
  });

$('#lineis2').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {
  var basicTimeline = anime.timeline({
    loop:false});
  basicTimeline.add({
  targets: '#lineis2 .trial .second',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 3000,
       })
    }
  });


$('#lineis3').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {
  var basicTimeline = anime.timeline({
    loop:false});
  basicTimeline.add({
  targets: '#lineis3 .trial .second',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 3000,
       })
    }
  });
