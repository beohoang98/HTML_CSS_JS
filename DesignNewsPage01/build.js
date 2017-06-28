//build trend news
function makeSlide(index, postList) {
    var slide = $('<div/>').addClass('slide');

    var image = $('<img/>').attr('src',postList[index].image)
                           .appendTo(slide);

    var title = $('<div/>').addClass('slide-title')
                           .html(postList[index].title)
                           .appendTo(slide);
    return slide;
}
function createNews(index, postList) {
    var news = $('<div/>').addClass('news-post');

    var image = $('<img/>').attr('src',postList[index].image)
                           .appendTo(news);
    var info = $('<div/>').html(postList[index].title)
                          .appendTo(news);
    var date = $('<footer/>').html(postList[index].date.toDateString())
                           .appendTo(news);
    return news;
}
function createNewsNoImg(index) {
    var news = $('<div/>').addClass('news-post');

    var info = $('<div/>').html(post[index].title)
                          .appendTo(news);
    var date = $('<footer/>').html(post[index].date.toDateString())
                           .appendTo(news);
    return news;
}
function checkTag(Tag, postData) {
    var arrayTag = postData.tag.split('#');
    for (var i = 0; i < arrayTag.length;++i) {
        if (Tag === arrayTag[i]) return true;
    }
    return false;
}
function filterNews(Tag) {
    var filtedPost = [];
    for (var i = 0; i < post.length; ++i) {
        if (checkTag(Tag, post[i])) {
            filtedPost.push(post[i]);
        }
    }
    return filtedPost;
}

$(document).ready(function() {
    var listNews = $('.hot-news .list-news');

    var tmpNews;
    for (var i = 0; i < Math.min(5,post.length); ++i) {
        if (i===0) tmpNews = createNews(i, post);
        else tmpNews = createNewsNoImg(i, post);
        listNews.append(tmpNews.clone(true));
    }
    for (var i = 4; i < 7; ++i) {
        tmpNews = makeSlide(i, post);
        if (tmpNews === undefined) break;
        $('#first-trend .slideshow').append(tmpNews.clone(true));
    }

    $('#first-trend .slideshow').css('width',3*100+'%');
    $('#first-trend .slide').css('width',100/3+'%');
    $('#first-trend').attr('cur-slide',1)
                     .attr('num-slide',3);

    //
    var photoPost = filterNews('photo');
    for (var i = 0; i < photoPost.length; ++i) {
        tmpNews = createNews(i, photoPost);
        $('.photo-news .list-news').append(tmpNews.clone(true));
    }
    //
    var videoPost = filterNews('video');
    for (var i = 0; i < videoPost.length; ++i) {
        tmpNews = createNews(i, videoPost);
        $('.video-news .list-news').append(tmpNews.clone(true));
    }
    //
    var hauPost = filterNews('hautruong');
    for (var i = 0; i < hauPost.length; ++i) {
        tmpNews = createNews(i, hauPost);
        $('.behind-the-pitch .list-news').append(tmpNews.clone(true));
    }
    //
    var restNews = $('.news .news-frame');
    var restPost=[];
    for (var i = 0; i < restNews.length; ++i) {
        var tagNews = restNews.eq(i).attr('tag');
        restPost = filterNews(tagNews,post);

        if (restPost.length === 0) break;
        //first post
        tmpNews = createNews(0, restPost);
        restNews.eq(i).find('.first-post').append(tmpNews.clone(true));
        //
        for (var j = 1; j < restPost.length; ++j) {
            tmpNews = createNews(j, restPost);
            $('.news .list-news').eq(i).append(tmpNews.clone(true));
        }
    }
});
