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
})
