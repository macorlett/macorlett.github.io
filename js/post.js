$(document).ready(function(){
	$('.js--article--next').mouseenter(function(){
		$('.article--next').addClass('article--next--active');
		move=$('.article--next').width();
		$('.article--wrapper').css({transform:'translateX(-'+move+'px)'});
	});
	$('.js--article--next').mouseleave(function(){
		$('.article--next').removeClass('article--next--active');
		$('.article--wrapper').css({transform:'translateX(0)'});
	});
	$('.js--article--prev').mouseenter(function(){
		$('.article--prev').addClass('article--prev--active');
	});
	$('.js--article--prev').mouseleave(function(){
		$('.article--prev').removeClass('article--prev--active');
	});
});