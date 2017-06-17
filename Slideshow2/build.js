var container = document.getElementsByClassName('slideshow')[0];
var view = document.getElementById('view');

function createPost(postData) {
    var infoName = postData.name;
    var infoBirth = postData.birth;
    var infoNation = postData.nation;
    var infoPosition = postData.position;
    var infoClub = postData.club;

    //create title
    var postTitle = document.createElement('div');
    postTitle.className = "post-title lowTheme headTextColor";
    postTitle.innerHTML = infoName;

    //create avatar
    var postImg = document.createElement('div');
    postImg.className = "avatar";
    postImg.style.backgroundImage = 'url('+postData.avatar+')';

    //create birth place and nation
    var postTagline = document.createElement('div');
    postTagline.className = "post-tagline mediumTheme subTextColor";
    postTagline.innerHTML = infoBirth + "<br>" + infoNation;
    var flags = document.createElement('img');
    flags.className = 'flag';
    flags.src = nationFlags[infoNation];
    postTagline.appendChild(flags);

    //create info place
    var postInfo = document.createElement('div');
    postInfo.className = "post-info textColor";
    postInfo.innerHTML = "Play as "+infoPosition+"<br>"
                          +"Club: <ul>";
    for (var i = 0; i < infoClub.length; ++i) {
        postInfo.innerHTML += "<li>"+infoClub[i]+"</li>";
    }
    postInfo.innerHTML += "<ul/>";

    //create Post
    var postMain = document.createElement('div');
    postMain.className = "post highTheme";
    postTitle.appendChild(postImg);
    postMain.appendChild(postTitle);
    postMain.appendChild(postTagline);
    postMain.appendChild(postInfo);

    //
    return postMain;
}

var tmpPost;
var tmpView;
var wSlide = post.length*100+"%";
document.getElementsByClassName('slideshow')[0].style.width = wSlide;
var wPost = 100/post.length+"%";

for (var i = 0; i < numOfPost; ++i) {
    tmpPost = createPost(post[i]);
    tmpPost.style.width = wPost;
    container.appendChild(tmpPost.cloneNode(true));

    tmpView = document.createElement("a");
    tmpView.setAttribute("onclick","show("+i+")");
    tmpView.innerHTML = "&bull;";
    view.appendChild(tmpView.cloneNode(true));
}
