var $slideshow = document.querySelector('.slideshow');
var lenOfSlide = player.length;
var tmpSlide;

function createSlideTitle(playerInfo) {
    // contain avatar, ability, club

    var avatar = document.createElement('div');
    avatar.className = "player-image";
    var img_avatar = document.createElement('img');
    img_avatar.setAttribute('src', playerInfo.avatar);
    avatar.appendChild(img_avatar);

    var slideTitleInfo = document.createElement('div');
    slideTitleInfo.className = 'slide-title-info';

    var ability = document.createElement('div');
    ability.className = 'player-total';
    ability.textContent = playerInfo['total-ability'];

    var club = document.createElement('div');
    club.className = "player-club";
    club.innerHTML = '<img src="'+playerInfo.club+'"/>';

    var slideTitle = document.createElement('div');
    slideTitle.className = 'slide-title';
    slideTitle.appendChild(avatar);
    slideTitleInfo.appendChild(ability);
    slideTitleInfo.appendChild(club);
    slideTitle.appendChild(slideTitleInfo);

    return slideTitle;
}

function createSlideTag(playerInfo) {
    //contain position, number

    var position = document.createElement('div');
    position.className = 'player-position';
    position.textContent = playerInfo.position;
    switch (playerInfo.position) {
        case "CF":
        case "SS":
        case "FW":
            position.style.backgroundColor = "#cc2222";
            break;
        case "AM":
        case 'CAM':
        case 'RM':
        case 'LM':
        case 'CM':
        case 'CDM':
            position.style.backgroundColor = "#2222cc";
            break;
        case "GK":
            position.style.backgroundColor = "#cccc22";
            break;
        default:
            position.style.backgroundColor = "#22cc22";
    }

    var number = document.createElement('div');
    number.className = 'player-number';
    number.textContent = playerInfo.number;

    var slideTag = document.createElement('div');
    slideTag.className = 'slide-tag';
    slideTag.appendChild(position);
    slideTag.appendChild(number);

    return slideTag;
}

function createSlideInfo(playerInfo) {
    var slideInfo = document.createElement('div');
    slideInfo.className = 'slide-info';

    var ability = playerInfo['best-ability'];
    for (var i = 0; i < ability.length; ++i) {
        var tmp = document.createElement('div');
        tmp.className = "player-ability";
        tmp.innerHTML = '<span>'+ability[i][0]+':</span>'
                          +ability[i][1];
        slideInfo.appendChild(tmp);
    }

    return slideInfo;
}

function createSlide(playerInfo) {
    //
    var head = document.createElement('div');
    head.className = 'slide-head';
    head.textContent = playerInfo.name;
    //
    var body = document.createElement('div');
    body.className = 'slide-body';
    var title = createSlideTitle(playerInfo);
    var tag = createSlideTag(playerInfo);
    var info = createSlideInfo(playerInfo);
    body.appendChild(title);
    body.appendChild(tag);
    body.appendChild(info);
    //
    var end = document.createElement('div');
    end.className = 'slide-end';
    //create slide
    var slide = document.createElement('div');
    slide.className = 'slide';
    slide.appendChild(head);
    slide.appendChild(body);
    slide.appendChild(end);

    return slide;
}


$slideshow.style.width = lenOfSlide*15+'rem';
for (var i = 0; i < lenOfSlide; ++i) {
    tmpSlide = createSlide(player[i]);
    $slideshow.appendChild(tmpSlide.cloneNode(true));
}
