$(document).ready(function() {
    var apiKey = 'cd6a8d693944d0640057506a61ea8109'; 
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1';
    
    $.get(url, function(data) {
        var movies = data.results.slice(0, 6);
        $('#movie').empty();
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            var posterPath = movie.poster_path;
            if (posterPath) { 
                var posterUrl = 'https://image.tmdb.org/t/p/w500' + posterPath;
                var movieDiv = $('<div class="movie-div">').append('<img src="' + posterUrl + '" alt="Movie Poster" />');
                var numberDiv = $('<div class="number-div">' + (i + 1) + '</div>'); // Sıra numarası ekleniyor
                movieDiv.append(numberDiv); // Sıra numarasını movieDiv'e ekliyoruz
                movieDiv.attr('data-id', movie.id); 
                movieDiv.click(function() { 
                    var movieId = $(this).attr('data-id'); 
                    window.location.href = "details.html?id=" + movieId; 
                });
                $('#movie').append(movieDiv);
            }
        }
    }).fail(function() {
        alert('An error occurred.');
    });
});
