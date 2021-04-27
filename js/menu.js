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

    $(function() {
    $(".game-type-carousel")
        .on('mousedown touchstart', function (e) {
            console.log("(x,y) = (" + e.pageX + "," + e.pageY +")");
            xDown = e.pageX;
            yDown = e.pageY;
        })
        .on('mouseup touchend',function (e) {
            console.log("(x,y) = (" + e.pageX + "," + e.pageY +")");
            xUp = e.pageX;
            yUp = e.pageY;
            if((xDown < xUp - 100) && (a < 0) && (a >= -1800))
            {
              a += 600;
                $(".game-type-carousel-panel").css("left", a + "px");
            }
            else if((xDown > xUp + 100) && (a > -1800))
            {
              a -= 600;
                $(".game-type-carousel-panel").css("left", a + "px");
            }
            //if ((xDown < Math.abs(xUp - 100) || xDown > Math.abs(xUp + 100)) || (yDown < Math.abs(yUp - 100) || yDown > Math.abs(yUp + 100))) {

            //}
        });
    });
})
