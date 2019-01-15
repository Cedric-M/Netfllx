var movieData = {
   count: 3,
   movies: [{
       id: 1,
       title: "Movie A",
       thumb: "http://placehold.it/280x150"
     },
     {
       id: 2,
       title: "Movie B",
       thumb: "http://placehold.it/280x150"
     },
     {
       id: 3,
       title: "Movie C",
       thumb: "http://placehold.it/280x150"
     },
   ]
 };
 
 $(document).ready(function() {
   console.log("ït works");

      if (typeof movieData === 'object' && typeof movieData !== null) {
      // List the movies
      for (var i in movieData.movies) {
         var movie = movieData.movies[i];
         var movieDiv = '<div class="movie-item" data-id="' + movie.id + '">' +
            '<img src="' + movie.thumb + '"><br>' +
            '<p>' + movie.title + '</p>' +
            '</div>';
         $('#movies').append(movieDiv);
      }
      }


 });