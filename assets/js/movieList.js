$(document).ready(function() {

    $('#backButton').click(function() {
        window.location.href = 'index.html';
    });

    var query = new URLSearchParams(window.location.search).get('query');
    var apiKey = "cd6a8d693944d0640057506a61ea8109";

    $.ajax({
        url: "https://api.themoviedb.org/3/search/movie",
        method: "GET",
        data: {
            api_key: apiKey,
            query: query
        },
        success: function(response) {
            var movies = response.results;
            var htmlContent = "";

            for (var i = 0; i < movies.length; i++) {
                if (movies[i].poster_path) {
                    var moviePosterPath = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
                    htmlContent += '<div class="movie"><img src="' + moviePosterPath + '" alt="' + movies[i].title + '"></div>';
                }
            }

            $("#movieList").html(htmlContent);
        },
        error: function() {
            console.error("API isteği başarısız.");
        }
    });
});
