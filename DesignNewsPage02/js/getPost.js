async function getPostData(source) {
    let url = "https://newsapi.org/v1/articles?source="+source+"&sortBy=top&apiKey=7462c60088a14ad69973e627fa264602";
    let url_fetch = await fetch(url);
    let jsonData = await url_fetch.json();
    return jsonData;
};
