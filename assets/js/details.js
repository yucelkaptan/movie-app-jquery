$(document).ready(function() {
    
    $('#backButton').click(function() {
        window.location.href = 'index.html';
    });

    $('#addToWhitelist').click(function(){
        var movieId = new URLSearchParams(window.location.search).get('id');
        
        var movieData = {
            id: movieId,
            title: $('#movieTitle').text(),
            poster: $('#moviePoster').attr('src'),
            releaseDate: $('#movieReleaseDate').text(),
            description: $('#movieDescription').text()
        };
        
        var whitelistedMovies = JSON.parse(localStorage.getItem('whitelistedMovies')) || [];
        
        var alreadyExists = whitelistedMovies.some(function(movie) {
            return movie.id === movieData.id;
        });
        
        if (!alreadyExists) {
            whitelistedMovies.push(movieData);
            localStorage.setItem('whitelistedMovies', JSON.stringify(whitelistedMovies));
        }
        
        window.location.href = 'whiteListPage.html';
    });

    var urlParams = new URLSearchParams(window.location.search);
    var movieId = urlParams.get('id');
    
    if (!movieId) {
        alert('Movie ID is missing.');
        return;
    }

    var apiKey = 'cd6a8d693944d0640057506a61ea8109';
    var url = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + apiKey + '&language=en-US';
    
    $.get(url, function(data) {
        $('#movieTitle').text(data.title);
        var posterUrl = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
        $('#moviePoster').attr('src', posterUrl);
        $('#movieDescription').text(data.overview);
        $('#movieReleaseDate').text("Release Date: " + data.release_date);
    }).fail(function() {
        alert('An error occurred.');
    });
});
