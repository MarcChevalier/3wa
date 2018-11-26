'user strict'

function onClickSearchMovie(e) {
	e.preventDefault();
    var movies = $('input[name=search]').val();
    getMovies(movies);

}

function onClickShowOneMovie() {
	var id = $(this).data('id');
    showOneMovie(id);
}


$('#send').on('click', onClickSearchMovie);

$(document).on('click', '#list li' , onClickShowOneMovie);
