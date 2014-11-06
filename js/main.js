$('.full-height').css({'height':($(window).height())+'px'});
$('#header-content').css({'margin-top':((($('#home-header').height())/2)-(($('#header-content').height())/2))+'px'});
$('.navigation--draw li label').click(function(){$('#navigation--toggle').attr("checked", false);});
$('.header--page-down').css({'top':($(window).height()-64-40)+'px'});
