$(document).ready(function()
{
    $(".menu").click(function(e)
    {
        $(".popup").slideDown(200);
    })

    $("html").click(function(e)
    {
      var target = $(e.target);
      if(target.is("html"))
      {
        $(".popup").hide(200);
      }
    })

    var a = 0;


document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

    function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 && (a > -1800) && (a <= 0)) {
          a -= 600;
            $(".game-type-carousel-panel").css("left", a + "px");
        } else if ( xDiff < 0 && (a >= -1800) && (a < 0)){
          a += 600;
            $(".game-type-carousel-panel").css("left", a + "px");
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    xDown = null;
    yDown = null;
};
});
