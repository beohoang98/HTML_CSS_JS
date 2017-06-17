
function createEmo(emo_name) {
	var emo = $('<i/>').attr('class','emo')
					   .addClass("emo-"+emo_name)
					   .hide();

	emo.on('click', function()
	{
		emo.parent().find('.emo-pressed')
					.removeClass('emo-pressed')
					.html("");

		emo.parent().children()
					.fadeOut(100);

		var nameOfLiker = $('<div/>').addClass("nameLiker").text(ava_name[ava_num-1]);
		emo.addClass('emo-pressed')
			 .append(nameOfLiker);

		$('#like-sound')[0].currentTime = 0;
		$('#like-sound')[0].play();
	});

	return emo;
}

function appendEmoArea() {
	var element = $('<div/>').attr("choose",0)
							  .addClass('emo-area');
	var emoLike = createEmo('like');
	var emoLove = createEmo('love');
	var emoHaha = createEmo('haha');
	var emoWow = createEmo('wow');
	var emoSad = createEmo('sad');
	var emoAngry = createEmo('angry');
	element.append(emoLike);
	element.append(emoLove);
	element.append(emoHaha);
	element.append(emoWow);
	element.append(emoSad);
	element.append(emoAngry);

	element.find('.emo-like').show();

	element.hover(function() {
		element.children().fadeIn(100);
	}, function() {
		element.children().fadeOut(100);
		var isPressed = element.find('.emo-pressed');

		if (isPressed.length===0)
			element.find('.emo-like').fadeIn(100);
		else isPressed.fadeIn(100);
	});

	return element;
}
