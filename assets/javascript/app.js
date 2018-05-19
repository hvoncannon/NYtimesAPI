$("#run-search").on("click", function () {
    event.preventDefault();
    var userQ = $("#search-term").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + '?'
        + $.param({
            'api-key': "78b7adbaef6b44d2b859569c1ff4814e",
            'q': userQ,
            'begin_date' : "",
            "end_date" : ""
        });
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response){
        console.log(response);
    })
})