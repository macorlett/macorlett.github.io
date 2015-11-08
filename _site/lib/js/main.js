$(document).ready(function(){

resizeend();

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
  }               
}