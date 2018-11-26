'use script';

console.log('coucou');



$.getJSON('http://localhost/API/recupOneCustomer.php?id=124', displayUser);

/*
$.ajax({
url : 'http://localhost/api/recupOneCustomer.php?id=103', // Le nom du script a changé, c'est send_mail.php maintenant !
type : 'GET', // Le type de la requête HTTP, ici devenu POST
dataType : 'json',
success : function(response, statut){ // code_html contient le HTML renvoyé
console.log(response);
}
});

*/
$.getJSON('http://localhost/API/recupOffice.php', displayDesk);

$.getJSON('http://localhost/API/recupOffice.php', displayDeskByCountry);

$.getJSON('http://localhost/API/employees.php', displayUser);

$.getJSON('http://localhost/API/employees.php?id=1002', displayUser);


function findCustomer(event) {
  event.preventDefault();
  var keyWord = $('#customerName').val();
  $.getJSON('http://localhost/API/recupCustomerWithKeyWord.php?api_key=xyz&name='+keyWord, displayUser);
}



function displayUser(response) {
  console.log(response);
}

function displayDesk(response) {
  console.log(response);
}

function displayDeskByCountry(response) {
  console.log(response);
}

$('#submitCN').on('click', findCustomer);





$.getJSON('http://localhost/API/recupOneCustomer.php?id=124', displayUser);
