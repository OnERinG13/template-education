$(document).ready(function(){

  // flag
  let click = 0;

  $('#search-icon').click(function(event){

    // the first click to open the input
    if (click == 0)
    {
      click = 1;

      // responsive for screen size less than 400
      if($(window).width() <= 400)
      {
        $('#search-form').animate({'top':'45px','right':'3em'});
        $('#input-search').css("top","10px");
        $(this).delay(1000).animate({marginRight:"7.2em",paddingRight:"29px"});
        $('#input-search').animate({width:'190px',paddingLeft: '14px'});
        event.preventDefault();
      }

      // responsive for screen size between 400 and 768
      else if ($(window).width() < 768 && $(window).width() > 400)
      {
        $('#search-form').animate({'top':'45px','right':'6em'});
        $(this).delay(1000).animate({marginRight:'10em',paddingRight:'29px'});
        $('#input-search').animate({width:'250px',paddingLeft: '14px'});
        event.preventDefault();
      }

      // responsive for screen size between 768 and 900
      else if ($(window).width() < 900 && $(window).width() >= 768)
      {
        $('#search-form').animate({'top':'45px','right':'25em'});
        $(this).delay(1000).animate({marginRight:'10em',paddingRight:'29px'});
        $('#input-search').animate({width:'250px',paddingLeft: '14px'});
        event.preventDefault();
      }

      // responsive for screen size larger than 900
      else
      {
        $(this).css({'margin-right':'12.1em','padding-right':'29px','transition':'all 0.9s ease'});
        $('#input-search').css({'width':'300px','padding-left': '14px'});
        event.preventDefault();
      }
    }

    // if not the first click bind icon to submit button
    else {
      document.getElementById('submit-search').click();
    }
  });
});
