(function($) {

  $('#section-1').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {
      anime({
        targets: '.box',
        translateX: function() { return anime.random(-50, 50) + 'vw'; },
        translateY: function() { return anime.random(-50, 50) + 'vh'; },
        scale: function() { return anime.random(10,30) / 10; },
        rotate: function() { return anime.random(-360,360); },
        duration: function() { return anime.random(1000,2000); },
        easing: 'easeOutQuad',
        // direction: 'alternate',
        loop: false,
        elasticity: function(el, i, l) {
          return (200 + i * 200);
        },
        begin: function(anim) {
          $(event.target).find('.log h1').html('Started');
        },
        complete: function(anim) {
          $(event.target).find('.log h1').html('Completed');
        }
      });
    }
  });

  $('#section-2').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

      var basicTimeline = anime.timeline({
        direction: 'alternate',
        loop: 3,
        elasticity: 350
      });
      basicTimeline.begin = function(anim) {
        $(event.target).find('.log h1').html('Started');
      };
      basicTimeline.complete = function(anim) {
        $(event.target).find('.log h1').html('Completed');
        $(event.target).find('.log h5').html('100%');
      };
      basicTimeline.run = function(anim) {
        $(event.target).find('.log h5').html(Math.round(anim.progress) + '%');
      }
      basicTimeline
        .add({
          targets: '.button',
          duration: 800,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 20,
          width: 20,
          opacity: 1,
          duration: 1,
        })
        .add({
          targets: '.progress-bar',
          duration: 800,
          width: 500,
          elasticity: 350
        })
        .add({
          targets: '.button',
          duration: 300,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 80,
          duration: 300,
          width: 500,
          elasticity: 350
        })
    }
  });
$('.tri').click(function(){
  $('#section-3').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

var basicTimeline = anime.timeline({
  loop:true,
   direction: 'alternate',
});

       basicTimeline
       .add({
          targets: '.akb',
          translateX: 390,
        duration: 500,
          width: 300,
          elasticity: 1000, 
        easing: 'easeInExpo'
        })
        .add({
          targets: '#morphing .polymorph',
points: [
    { value: '732.658,377.667 575.643,469.986 574.199,287.847 ' },
    { value: '1366.341,378.401 1209,429.66 1208.207,329.643 ' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true,
fill: [
    {value: '#FF931E'}, 
    {value: '#FF931E'},
    {value: '#FFFFE0'}
  ],
   elasticity: 500,
   direction: 'alternate',
       })

    }

})
    


  });

  $('#section-4').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {
  var basicTimeline = anime.timeline({
    loop:true
  });
      basicTimeline.add({
          targets: '#lineis .trial .first',
  strokeDashoffset: [anime.setDashoffset, 10],
  easing: 'easeInOutQuad',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true,
       })
.add({
          targets: '#lineis .trial .second',
  strokeDashoffset: [anime.setDashoffset, 0],
   easing: 'easeInOutQuad',
  duration: 300,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true,
       })
.add({
          targets: '#lineis .trial .third',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuart',
  duration: 5500,
  delay: function(el, i) { return i * 250 },
 
  loop: true,
       })
.add({
          targets: '#lineis .trial .forth',
  strokeDashoffset: [anime.setDashoffset, 10],
  easing: 'easeInOutQuad',
  duration:1800,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true,
       })
.add({
          targets: '#lineis .trial .fifth',
  strokeDashoffset: [anime.setDashoffset, 10],
   easing: 'easeInOutQuad',
  duration:4000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true,
       })
    }


  });

  $('#section-5').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {

  var basicTimeline = anime.timeline({});
      basicTimeline.complete = function(anim) {
        $(event.target).find('.log p').html('For Demo');
      };
      basicTimeline
        .add({
          targets: '.baga',
  opacity: .5,
  left: '240px',
  backgroundColor: '#4267B2',
  borderRadius: ['0em', '20em'],
  easing: 'easeInOutSine'
       })
 .add({
          targets: '.baga',
          height: 50,
          duration: 300,
          width: 300,
          elasticity: 500
        })


    }

      


  });

})(jQuery);
