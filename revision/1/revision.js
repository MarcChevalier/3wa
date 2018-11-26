'use strict';


var coucou = document.querySelectorAll('.coucou');
console.log(coucou);

for (var i = 0; i < coucou.length; i++) {
	coucou[i].addEventListener('click', sayPara);
}

function sayPara() {
	console.log(this.textContent);
}
/* jquery
$('.coucou').on('click', sayPara);

function sayPara() {
	console.log($(this).text());
}
Ajax utilise les requêtes http qui utilise "class xml http request"
*/
var slides =
[
    { img: 'img/1.jpg'},
    { img: 'img/2.jpg'},
    { img: 'img/3.jpg'},
    { img: 'img/4.jpg'}];

    function onClickNext() {

    	if (index < slides.length-1) {

        	index++;

        } else {

        	index = 0;

        }

        img.src = slides[index].img;


    }

    function onClickPrev() {

    	if (index <= 0) {

        	index = slides.length-1;

        } else {

        	index--;

        }

        img.src = slides[index].img;


    }
