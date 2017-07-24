var account_key = 883610; //steal from jfiddle

$(document).ready(function() {
    $('#search-button').on('click', function() {
        $("#ShowFirst").hide();
        UpdateImage($('#search-value').val());
    })
});

function UpdateImage(searchkey) {
    var param = {
        q : searchkey,
        page : 1,
        response_detail : "all",
        size: "l"
    };
    $("#image-area").find("img").fadeOut(500, function() {
        $(this).remove();
    })
    $.getJSON("http://api.bigstockphoto.com/2/"+account_key+"/search/?callback=?",param, function(data) {
        if (data && data.data && data.data.images) {
            $.each(data.data.images, function(index, item) {
                var colName = "#col"+(index%3);
                $(colName).append("<img class=\"image-childs\" src=\""+item.preview.url+"\"/>")
            })
        }
    });
}
