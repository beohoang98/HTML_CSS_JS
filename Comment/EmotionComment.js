
function createEmo(className) {
	var emo = $('<i/>').attr('class','emo')
					   .addClass(className);
	return emo;
}

function appendEmoArea() {
	var element = $('<span/>').addClass('emo-area');
	var emoLike = createEmo('emo-like');
	var emoLove = createEmo('emo-love');
	var emoHaha = createEmo('emo-haha');
	var emoWow = createEmo('emo-wow');
	var emoSad = createEmo('emo-sad');
	var emoAngry = createEmo('emo-angry');
	element.append(emoLike);
	element.append(emoLove);
	element.append(emoHaha);
	element.append(emoWow);
	element.append(emoSad);
	element.append(emoAngry);
	return element;
}
$('.emo').click(function() {
	$(this).toggleClass('emo-pressed');
})