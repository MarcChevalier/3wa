'user strict'






function show() {
  var name = $('input[name=what]:checked').val();
  console.log(name);

  if (name == 1){
    $.get('index-ajax.php' , gestionData);
  } else if(name == 2) {
    $.getJSON('2-get-json-data.php' ,getList);
  } else {
    $.get('3-get-html-movies.php' , gestionData);
  }
}

function gestionData(response) {

  $('#target').empty();
  $('#target').html(response);
}


$('#run').on('click', show);


function getList(response) {

  $('#target').empty();
  console.log(response);
  var list = $('<ul>');
  for(var i = 0; i < response.length; i++) {
    list.append('<li>'+response[i].firstName+' '+response[i].phone+'</li>')
  }
  $('#target').html(list);
}

// function getMovies(response) {
//   console.log(response);
//   var movie = $('<ul>');
//   for(var i = 0; i < response.length; i++) {
//     list.append('<li>'+response[i].cover+' '+response[i].duration+''+response[i].title+'</li>')
//   }
//   $('#target').html(movie);
