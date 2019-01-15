var movieData = {
   count: 3,
   movies: [{
       id: 1,
       title: "",
       thumb: "assets/img/birdbox.jpg"
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

    if (typeof movieData === 'object' && typeof movieData !== null) {
      // List the movies
      for (var i in movieData.movies) {
         var movie = movieData.movies[i];
         var movieDiv = 
         
         '<li class="movie-item" data-id="' + movie.id + '">' +
            '<a href="#">' +
               '<img src="' + movie.thumb + '" width="280" height="150" />' +
               '<span class="text-content"><i class="fa fa-chevron-up" aria-hidden="true"></i><br><br><i class="fa fa-4x  fa-play-circle-o"></i><br><br>' + movie.title + '</span></span>' +
            '</a>' +
         '</li>';

         $('#movies').append(movieDiv);
      }
    }

 });
