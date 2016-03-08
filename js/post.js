$(document).ready(function(){
	$('.js--article--next').mouseenter(function(){
		$('.article--next').addClass('article--next--active');
	});
	$('.js--article--next').mouseleave(function(){
		$('.article--next').removeClass('article--next--active');
	});
});