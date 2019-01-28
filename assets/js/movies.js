var movieData = {
   count: 6,
   movies: [{
       id: 1,
       title: "",
       thumb: "assets/img/birdbox.jpg"
     },
     {
       id: 2,
       title: "The Ballad of Buster Scruggs",
       thumb: "assets/img/buster-scruggs.jpg"
     },
     {
       id: 3,
       title: "",
       thumb: "assets/img/roma.jpg"
     },
     {
      id: 4,
      title: "Lorem Ipsum",
      thumb: "assets/img/placehold.png"
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      thumb: "assets/img/placehold.png"
    },
    {
      id: 6,
      title: "Lorem Ipsum",
      thumb: "assets/img/placehold.png"
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

         $('#films').append(movieDiv);
      }
    }

 });
