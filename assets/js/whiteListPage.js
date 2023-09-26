$(document).ready(function(){

   $('#whitelistButton').click(function(){
       window.location.href = 'whiteListPage.html';
   });

   var whitelistedMovies = JSON.parse(localStorage.getItem('whitelistedMovies')) || [];

   if (whitelistedMovies.length > 0) {
      whitelistedMovies.forEach(function(movie, index){
         $('#whitelist').append(
            '<div class="poster-container" data-index="' + index + '">' +
               '<img src="' + movie.poster + '" alt="' + movie.title + '">' +
               '<button class="delete-button">Delete</button>' +
            '</div>'
         );
      });
   }

   $('#whitelist').on('click', '.delete-button', function(){
       var index = $(this).closest('.poster-container').data('index');
       whitelistedMovies.splice(index, 1);
       localStorage.setItem('whitelistedMovies', JSON.stringify(whitelistedMovies));
       location.reload();
   });
});
