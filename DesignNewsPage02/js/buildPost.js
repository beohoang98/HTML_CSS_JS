function createPost(article) {
    var post_wrap = $('<a/>').addClass('post_wrap')
                            .attr('href',article.url);
    var post = $('<div/>').addClass('post')
                        .appendTo(post_wrap);

    var img_wrap = $('<div/>').addClass('img-wrap')
                            .appendTo(post);
    var img_post = $('<img/>').addClass('post-img')
                            .attr('src', article.urlToImage)
                            .attr('alt', article.title)
                            .appendTo(img_wrap);

    var info = $('<div/>').addClass('post-info')
                        .appendTo(post);
    var title = $('<div/>').addClass('post-title')
                        .html(article.title)
                        .appendTo(info);
    var description = $('<div/>').addClass('post-description')
                                .html(article.description)
                                .appendTo(info);

    var author = $('<div/>').addClass('post-author')
                            .appendTo(post);
    var author_name = $('<p/>').html(article.author)
                            .appendTo(author);

    if (!article.publishedAt == false) {
        var d = new Date(article.publishedAt);
        var publishedAt = $('<p/>')
                            .html(d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear())
                            .appendTo(author);
    }

    return post_wrap;
}

function createListPost(target, postData, from, to) {
    var list = $(target);
    var article = {};
    var post = {};
    for (var i = from; i <= to; ++i) {
        article = postData.articles[i];
        post = createPost(article);
        list.append(post.clone(true));
    }
}


//run at here
document.addEventListener('DOMContentLoaded',async()=>{
    var topPost = await getPostData("espn");
    createListPost('#top-post > .colLeft .first-post', topPost, 0, 0);
    createListPost('#ESPN-news .list-post', topPost, 1, topPost.articles.length-1);

    var GameNews = await getPostData("ign");
    var num = GameNews.articles.length;
    createListPost('#game-news > .colLeft .list-post', GameNews, 0, Math.floor(num/2)-1);
    createListPost('#game-news > .colRight .list-post', GameNews, Math.floor(num/2), num-1);

    var GGNews = await getPostData("google-news");
    num = GGNews.articles.length;
    createListPost('#google-news .list-post', GGNews, 0, num-1);

    var NYTNews = await getPostData("the-new-york-times");
    num = NYTNews.articles.length;
    createListPost('#the-new-york-times .list-post', NYTNews, 0, num-1);

    makeASafe();
});
