var imgSize = 150;

$(document).ready(function() {

var count = 0;
$('textarea').text("");

function createAvatar(count, ava_num) {
	var avatar = $('<div/>').addClass('avatar')
							.html('<img src="avatar/img'+ava_num+'.jpg"/>');							

	return avatar;
}

function createCmt(count, textValue) {
	var ava_num = Math.floor(Math.random()*numOfName)+1;

	var commentBox = $('<div/>').attr('class','comment-box')
								.attr('id','cmt'+count)
								.hide();
	
	var avatar = createAvatar(count, ava_num).appendTo(commentBox);

	var commentText = $('<span/>').attr('class','comment-text')
								  .append(textValue);

	var commentName = $('<span/>').attr('class','comment-name')
								  .append(ava_name[ava_num-1]);

	var emoArea = appendEmoArea();

	var commentContent = $('<div/>').attr('class','comment-content')
									.append(commentName)
									.append(commentText)
									.append(emoArea)
									.appendTo(commentBox);

	return commentBox;
}

$('textarea').bind('enterKey', function() {
	++count;
	var textValue = document.getElementsByTagName('textarea')[0];
	if (textValue.value === "" || textValue.value === " ") {
		alert("Ban chua nhap comment");
		return;
	}

	var newCmt = createCmt(count,textValue.value).appendTo('#comment-area')
												 .toggle(500);
	///notify
	textValue.value = "";
	$('#notify').get(0).currentTime = 0;
	$('#notify').get(0).play();
	
	///scroll down
	var top = $('#comment-area').scrollTop();
	var len = $('#comment-area')[0].scrollHeight;
	if(top != len)
	{
  		$('#comment-area').animate({scrollTop:len}, '100');
	}
	$('textarea').focus();
});

$('textarea').keyup(function(e) {
	if (e.keyCode == 13) {
		$(this).trigger('enterKey');
	}
});

$('#send').click(function() {
	$('textarea').trigger('enterKey');
});

});


