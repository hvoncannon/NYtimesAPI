$("#run-search").on("click", function () {
    event.preventDefault();
    var userQ = $("#search-term").val().trim();
    var start = $('#start-year').val().trim();
    var end = $('#end-year').val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + '?' + "api-key=78b7adbaef6b44d2b859569c1ff4814e&q=" + userQ
    if (start !== "") {
        queryURL += '&begin_date=' + start + '0101';
    }
    if (end !== "") {
        queryURL += '&end_date=' + end + '1231';
    }
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (response) {
        for (var i = 0; i < 10; i++) {
        console.log(response.response.docs[i]);
        console.log(response.response.docs[i].byline);
        var newDiv = $("<div>")
        // $("#article-section").append("<div>" + response.response.docs[i].headline.main + "</div>");
        // $("#article-section").append("<div>" + response.response.docs[i].byline.original + "</div>");
    }
    })
})