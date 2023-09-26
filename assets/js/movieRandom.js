$(document).ready(function() {
    var apiKey = 'cd6a8d693944d0640057506a61ea8109'; 
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1';
    
    $.get(url, function(data) {
        var movies = data.results;

        movies.sort(function() {
            return .5 - Math.random();
        });

        movies = movies.slice(0, 6);

        $('#movieRandom').empty(); 
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            var movieId = movie.id;
            var posterPath = movie.poster_path;
            if (posterPath) { 
                var posterUrl = 'https://image.tmdb.org/t/p/w500' + posterPath;
                var movieDetailUrl = 'details.html?id=' + movieId; // Film ID'sini URL'ye ekle
                var movieDiv = $('<div>').append('<a href="' + movieDetailUrl + '"><img src="' + posterUrl + '" alt="Movie Poster" /></a>');
                $('#movieRandom').append(movieDiv);
            }
        }
    }).fail(function() {
        alert('An error occurred.');
    });
});
