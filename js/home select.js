$(document).ready(function(){
  let best = 1;
  let newest = 0;
  let free = 0;
  let heightFather = null;
  let heightContent = null;
  $('#best-button').click(function(){
    if (best == 0) {
      best = 1;
      newest = 0;
      free = 0;
      sectionStyle(best,newest,free);
      sectionBorder(best,newest,free,heightFather,heightContent);
      $(window).scrollTop(1070);
    }else{
      heightFather = $('.father-categories').height();
      heightContent = $('.content-categories > div').height();
      best = 0;
      newest = 0;
      free = 0;
      sectionStyle(best,newest,free);
      sectionBorder(best,newest,free);
    }
  });
  $('#newest-button').click(function(){
    if (newest == 0) {
      free = 0;
      best = 0;
      newest = 1;
      sectionStyle(best,newest,free);
      sectionBorder(best,newest,free,heightFather,heightContent);
      $(window).scrollTop(1070);
    }else{
      newest = 0;
      free = 0;
      best = 0;
      sectionStyle(best,newest,free);
      sectionBorder(best,newest,free);
    }
  });
  $('#free-button').click(function(){
    if (free == 0) {
      best = 0;
      newest = 0;
      free = 1;
      sectionStyle(best,newest,free);
      sectionBorder(best,newest,free,heightFather,heightContent);
      $(window).scrollTop(1070);
    }else{
      free = 0;
      newest = 0;
      best = 0;
      sectionStyle(best,newest,free);
      sectionBorder(best,newest,free);
    }
  });
});

function sectionStyle(best = 0, newest = 0, free = 0){
  $('#best-posts').css('opacity', best);
  $('#newest-posts').css('opacity', newest);
  $('#free-posts').css('opacity', free);
}
function sectionBorder(best = 0 , newest = 0 , free = 0, heightFather = 0, heightContent= 0){
  if (best == 0) {
    best = '3px solid #d80027';
  }else {
    best = '50px solid #7a0099';
  }
  if (newest == 0) {
    newest = '3px solid #d80027';
  }else {
    newest = '50px solid #7a0099';
  }
  if (free == 0) {
    free = '3px solid #d80027';
  }else {
    free = '50px solid #7a0099';
  }
  $('#best-button').css('border-bottom', best);
  $('#newest-button').css('border-bottom', newest);
  $('#free-button').css('border-bottom', free);
  $('.father-categories').css('height',heightFather);
  $('.father-categories *').css('height',heightContent);
}
