'user strict'

var contacts = [];

$('#add-contact').on('click', information);


function information() {


    $('#contact-form').toggleClass('hide');

  }


$('#save-contact').on('click', onClickSaveContact);

function onClickSaveContact() {
  var civility = $('#title').val();
  var lastname = $('#lastName').val();
  var firstname = $('#firstName').val();
  var phone = $('#phone').val();

  var contact = {
    civility: civility,
    lastname: lastname,
    firstname: firstname,
    phone: phone
  }

  contacts.push(contact);

  saveToLocalStorage(contacts);
  console.log(contacts);

}

function saveToLocalStorage(tab) {
  var stringTable = JSON.stringify(tab);
  window.localStorage.setItem('contacts', stringTable);
}

function getStorage(tab) {
    var parse = JSON.stringify(tab);
    window.localStorage.getItem('contacts', parse);
}

// function clearAll(contacts) {
//    var clearAll = JSON.stringify(tab);
//    window.localStorage.clear('contacts', tab);
//
// }



//   $('#save-contact').on('click', saveContact);
//
//
//   function saveContact() {
//
//
//       $('#save-contact').window.localStorage.getItem(saveContact);
// ]

///////////////////////CORRECTION//////////////////////

//utilities.js


function saveDataToDomStorage(key, data)
{
    var jsonData;

    jsonData = JSON.stringify(data);

    window.localStorage.setItem(key, jsonData);
}

function loadDataFromDomStorage(key)
{
    var jsonData;

    jsonData = window.localStorage.getItem(key);

    return JSON.parse(jsonData);
}
//address-book.js

var contacts = loadData();


function onClickAddContact()
{
	$('#contact-form').toggleClass('hide');

}


function onClickSaveContact() {

	var contact = {
    	civility: $('#title').val(), // document.getElementById('title').value;
        lastname: $('#lastName').val(), // document.getElementById('lastName').value;
        firstname: $('#firstName').val(),
    	phone: $('#phone').val()
    };

    contacts.push(contact);

    saveDataToDomStorage('addressBook', contacts);

}

function loadData() {

	var data = loadDataFromDomStorage('addressBook');

    if (data == null) {

    	return [];


    } else {

    	return data;

    }



}




 $('#add-contact').on('click', onClickAddContact);
 $('#save-contact').on('click', onClickSaveContact);
//////////////////////////COURS////////////////////////////

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>JavaScript</title>
	<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
</head>
<body>
	<h1>jQuery</h1>
	<p id="para1" class="para">para1</p>
    <p id="para2" class="para">para2</p>
    <p id="para3" class="para">para3</p>
    <p id="para4" class="para">para4</p>
    <p id="para5" class="para">para5</p>

    <div id="affichage">
    	<p>coucou</p>
    </div>

    <form>
    	<input type="text" id="inp1"/>
    	<button id="but">GO</button>
    </form>
</body>



<script>


var affiche = document.getElementById('affichage');

affiche.textContent = 'hello'; // natif

$('#affichage').text('hello'); // jQuery



affiche.innerHTML = '<p>hello</p>'; //natif

$('#affichage').html('<p>hello</p>'); // jQuery



affiche.append("<p>hello</p>") // natif

$('#affichage').append('<p>hello</p>'); // jQuery







//jQuery


$('#para1').on('click', hello); // selectionner et faire un event listener



$('.para').on('click', sayAlert);


$(document).on('keyup', function() {

    $('#para3').css('color', 'red');
    $('#para4').css('border', '1px solid red');
    $('#para2').toggleClass('hide');
    //$('#para2').addClass('hide');
    //$('#para2').removeClass('hide');

});




$('#but').on('click', alertButton);

function alertButton(event) {

    event.preventDefault();

	alert($('#inp1').val());

}



// natif
/*

var para1 = document.getElementById('para1');

para1.addEventListener('click', hello);
*/

/*

var para = document.querySelector('.para');

for (var i = 0; i < para.length; i++) {

	para[i].addEventListener('click', sayAlert);

}

var inp1 = document.getElementById('inp1');

inp1.value


*/


function hello() {

	console.log('hello');


}

function sayAlert() {

	alert($(this).text());  // equivalent TextContent

}








</script>
