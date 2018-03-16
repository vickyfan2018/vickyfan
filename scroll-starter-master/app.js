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

  $('#section-3').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

    var morphing = anime({
  targets: '#morphing .polymorph',
  points: [
    { value: '718,292.506 606.993,356.861 607.12,227.933' },
    { value: '1217.969,306.514 1107,331.861 1107.05,280.948 ' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true,
fill: [
    {value: '#FFFF00'}, // Or #FFFFFF
    {value: '#F0E68C'},
    {value: '#FFFFE0'}
  ],
   elasticity: 500,
   direction: 'alternate',
});


    }


  });

  $('#section-4').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

if (isInView) {
  var basicTimeline = anime.timeline({
    loop:true
  });
      basicTimeline.add({
          targets: '#lineis .trial path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
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
