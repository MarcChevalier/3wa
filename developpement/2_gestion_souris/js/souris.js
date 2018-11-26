'user strict'

var button = document.getElementById('toggle-rectangle');
var div = document.querySelector('.rectangle');

function myFunctionHide(){
  div.classList.toggle('hide')
}

button.addEventListener('click', myFunctionHide);

function myFunctionColorRed(){
  div.classList.add('important')
}

div.addEventListener('mouseover', myFunctionColorRed);

function myFunctionColorGreen(){
  div.classList.remove('important');
  div.classList.remove('good');
}

div.addEventListener('mouseout', myFunctionColorGreen);

function myFunctionColorDoubleClick(){
  div.classList.add('good')
}

div.addEventListener('dblclick', myFunctionColorDoubleClick);
