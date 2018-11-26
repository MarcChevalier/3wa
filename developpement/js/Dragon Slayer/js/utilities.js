'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function requestPrompt(message, min, max)
{
  var value;
  do{

  value = parseInt(window.prompt(message));
} while ( isNaN(value)==true ||  value > max  || value < min )

    return value;


}
