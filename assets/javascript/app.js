$("button").on("click", function () {
    var userQ
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; url += '?'
        + $.param({
            'api-key': "78b7adbaef6b44d2b859569c1ff4814e",
            'q': "japan"
        });
})