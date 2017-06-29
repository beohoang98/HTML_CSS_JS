var post = [];

function createPost(index) {
    var result = {};

    for (var i = 0; i < dataType.length; ++i) {
        result[dataType[i]] = dataNews[index][i];
    }

    return result;
}

function createData() {
    for (var i = 0; i < dataNews.length; ++i) {
        post.push(createPost(i));
    }
}

function sortPost() {
    for (var i = 0; i < post.length; ++i) {
        for (var j = i + 1; j < post.length; ++j) {
            if (post[i].date.getTime() < post[j].date.getTime()) {
                var tmp = post[i];
                post[i] = post[j];
                post[j] = tmp;
            }
        }
    }
}

//build in here
createData();
sortPost();
