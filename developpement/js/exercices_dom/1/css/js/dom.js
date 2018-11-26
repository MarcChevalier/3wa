'user strict'

var para1 = document.getElementById('para1');
var myPara = document.querySelectorAll('.my-para');

var event = document.getElementById('event');


para1.style.color = "red";
para1.style.backgroundColor = "green";

myPara[0].style.color = "pink";
console.log(myPara);

for (var i = 0; i < myPara.length; i++) {
	myPara[i].style.color = "pink";
}
para1.classList.add('blue');
para1.classList.remove('useless');


function myFunction() {
	event.classList.toggle('blue');
}



event.addEventListener('click', myFunction);
