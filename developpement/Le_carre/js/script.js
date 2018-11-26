'use strict'

var carre = document.getElementById('square');
document.onkeydon = keyCode
function keyBoardEvent(event) {



    switch(event.keyCode) {

        case 37:
            carre.margin.right = "10px";
        break;

        case 39:
            carre.margin.left = "10px";
        break;

        case 38:
            carre.margin.top = "10px";
        break;

        case 40:
            carre.margin.bottom = "10px";
        break;

        default:
        	console.log('pas d\'event associé à cette touche');
        break;
    }

document.addEventListener('DOMContentLoaded', function()
}
 keyBoardEvent();
//////////////////CORRECTION//////////////////
var square = document.getElementById("square");
var top_margin = 0;
var left_margin = 0;
const ARROW_LEFT = 37;
const ARROW_UP = 38;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;

function move(event)
{
	switch(event.keyCode)
  {
	case ARROW_LEFT :
    	if(left_margin >= 10) {
    		left_margin-=10;
        	square.style.left = left_margin +"px";
        }
    break;

    case ARROW_RIGHT :
    	if(left_margin <= 240) {
			left_margin+=10;
			square.style.left = left_margin +"px";
		}
	break;
    case ARROW_UP :
    	if(top_margin >= 10) {
			top_margin-=10;
			square.style.top = top_margin +"px";
		}
		break;
     case ARROW_DOWN :
    	if(top_margin <= 240) {
			top_margin+=10;
			square.style.top = top_margin +"px";
		}

   	break;


 }
}


document.addEventListener("keydown",move)
