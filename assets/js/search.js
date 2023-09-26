$(document).ready(function() {
    var apiKey = 'cd6a8d693944d0640057506a61ea8109';

    $('#searchBar').on('keyup', function() {
        var query = $(this).val();
        if (query.length >= 3) { 
            var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query;
            $.get(url, function(data) {
                var movies = data.results;
                $('#searchResults').empty(); 

                for (var i = 0; i < movies.length; i++) {
                    var movie = movies[i];
                    var title = movie.title;
                    var movieId = movie.id;
                    $('#searchResults').append('<div class="search-item" data-id="' + movieId + '">' + title + '</div>');
                }

                $('.search-item').click(function() {
                    var movieId = $(this).data('id');
                    window.location.href = 'details.html?id=' + movieId;
                });

            }).fail(function() {
                $('#searchResults').html('An error occurred.');
            });
        }
    });
});
