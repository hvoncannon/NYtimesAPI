$("#run-search").on("click", function () {
    event.preventDefault();
    var userQ = $("#search-term").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + '?' + "api-key=78b7adbaef6b44d2b859569c1ff4814e&q=" + userQ
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response){
        console.log(response);
        console.log(response.response.docs[0].byline);
        var newDiv = $("<div>")
        $("#article-section").append(response.response.docs[0].headline.main);
    })
})