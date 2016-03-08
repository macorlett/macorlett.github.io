$(document).ready(function(){

resizeend();
console.log($(window).height());

wrapTitleCharacters();

});

var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function() {
  rtime = new Date();
  if (timeout === false) {
    timeout = true;
    setTimeout(resizeend, delta);
  }
});

function resizeend() {
  if (new Date() - rtime < delta) {
    setTimeout(resizeend, delta);
  } else {
    timeout = false;
    if($(window).width()>799){
      $('.js--full-height').css({height:$(window).height()+"px"});
    }else{
      $('.js--full-height').css({height:"auto"});
    }
    if($(window).width()>600){
      $('.post--link--prev .js--mobile--prev').remove();
      $('.post--link--next .js--mobile--next').remove();
    }else{
      if(!$('.js--mobile--next').length){
        $('.post--link--next').prepend('<div class="js--mobile--next" style="display:inline">Next</div>');
      }
      if(!$('.js--mobile--prev').length){
        $('.post--link--prev').append('<div class="js--mobile--prev" style="display:inline">Previous</div>');
      }
    }
  }               
}
function wrapTitleCharacters(){
  $('.post h1').each(function(){
    var words = $(this).html().split(' ');
    var count = words.length;
    words.splice(count-2,0, '<span>');
    words.push('</span>');
    str=words.join(" ");
    $(this).html(str);
  });
}