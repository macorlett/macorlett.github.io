$(document).ready(function(){
	$('.js--article--next').mouseenter(function(){
		$('.article--next').addClass('article--next--active');
		move=$('.article--next').width();
		pushElement($('.article--wrapper'),-move);
		pushElement($('.article--prev'),-move);
	});
	$('.js--article--next').mouseleave(function(){
		$('.article--next').removeClass('article--next--active');
		pushElement($('.article--wrapper'),0);
		pushElement($('.article--prev'),0);
	});
	$('.js--article--prev').mouseenter(function(){
		$('.article--prev').addClass('article--prev--active');
		move=$('.article--prev').width();
		pushElement($('.article--wrapper'),move);
		pushElement($('.article--next'),move);
	});
	$('.js--article--prev').mouseleave(function(){
		$('.article--prev').removeClass('article--prev--active');
		pushElement($('.article--wrapper'),0);
		pushElement($('.article--next'),0);
	});
});

function pushElement(obj,num){
	obj.css({transform:'translateX('+num+'px)'});
}