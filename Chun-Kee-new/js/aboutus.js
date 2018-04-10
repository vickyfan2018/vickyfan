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

$('.first-section').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {
  var basicTimeline = anime.timeline({
    loop:false});
  basicTimeline.add({
  targets: '#lineis .trial .second',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 1000,
       })
    }
  });

$('.second-section').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {
  var basicTimeline = anime.timeline({
    loop:false});
  basicTimeline.add({
  targets: '#lineis2 .trial .second',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 1000,
       })
    }
  });


$('.third-section').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {
  var basicTimeline = anime.timeline({
    loop:false});
  basicTimeline.add({
  targets: '#lineis3 .trial .second',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 1000,
       })
    }
  });
