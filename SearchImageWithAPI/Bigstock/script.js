var account_key = 883610; //steal from jfiddle
var curPage = 1;
var isLoaded = true;

$(document).ready(function() {
    $('#search-button').on('click', function() {
        $("#ShowFirst").hide();
        $("#image-area").find("img").fadeOut(500, function() {
            $(this).remove();
        });
        curPage = 1;
        UpdateImage($('#search-value').val());
    });
    $(window).scroll(function() {
        if (isLoaded &&
            $(window).scrollTop()+$(window).height() >= $(document).height()-10)
        {
            curPage += 1;
            UpdateImage($('#search-value').val());
        }
    });
    $("#search-value").keypress(function(e) {
        if (e.keyCode===13 && !e.shiftKey) {
            e.preventDefault();
            $("#search-button").click();
        }
    })
});

function UpdateImage(searchkey) {
    var param = {
        q : searchkey,
        page : curPage,
        limit: 15
    };
    isLoaded = false;
    $("#loading-area").fadeIn(400);
    $.getJSON("http://api.bigstockphoto.com/2/"+account_key+"/search/?callback=?",param, function(data) {
        if (data && data.data && data.data.images) {
            $.each(data.data.images, function(index, item) {
                var colName = "#col"+(index%3);
                $(colName).append("<img class=\"image-childs\" src=\""+item.small_thumb.url+"\"/>")
            })
        }
    }).done(function() {
        isLoaded = true;
        $("#loading-area").fadeOut(400);
    });
}
