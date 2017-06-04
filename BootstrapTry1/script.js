$(document).ready(function() {
	$('<div>').attr('class', 'container-fluid row')
			.attr('id', 'main')
			.appendTo('body');
	for (var i =0; i < 10; ++i) {
		var d = $('<div></div>').attr('class', 'text-info col-xs-6 btn btn-info');
		$('#main').append(d);
		var $img = $('<img/>').attr('class', 'img-responsive')
								.attr('alt', 'Hinh'+(i+1))
								.attr('src', 'image'+(i+1)+'.jpg')
								.css('border-radius', '20%');
		d.append($img);
	}
});