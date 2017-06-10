$(document).ready(function(){
	$("#side-bar a").hide();
	$('#side-bar-hover').on('click',function() {
		$('#side-bar a').slideToggle(500);
	});

	$('.info-mem').hover(function(){
		$(this).find('.nganh, .totnghiep').show(500);
		$(this).find('.nienkhoa').css('border-color','#22f');
	}, function() {
		$(this).find('.nganh, .totnghiep').hide(500);
		$(this).find('.nienkhoa').css('border-color','#88f');
	});
});