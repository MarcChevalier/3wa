'user strict';


var user = window.prompt('pierre, feuille, ciseaux').toLowerCase();;
var computer;
var random = Math.random();
var result;

if (random < (1/3)) {
  computer = 'pierre';

}
else if (random < (2/3)) {
  computer = 'ciseaux';
}
else {
  computer = 'feuille';
}
switch (user) {
  case 'pierre':
    if (computer == 'pierre') {
      result = 'égalité !';
    }
    else if (computer == 'ciseaux') {
      result = 'Gagné !'
    }
    else {
      result = 'Perdu !';
    }
    break;

  case 'feuille':
    if (computer == 'feuille') {
      result = 'égalité !';
    }
    else if (computer == 'pierre') {
      result = 'Gagné !'
    }
    else {
      result = 'Perdu !';
    }
    break;

    case 'ciseaux':
      if (computer == 'ciseaux') {
        result = 'égalité !';
      }
      else if (computer == 'feuille') {
        result = 'Gagné !'
      }
      else {
        result = 'Perdu !';
      }
      break;

}
document.write('Voici le choix de l\'ordinateur'+ computer);
document.write(result);
console.log(computer);

                        //
                        // CORRECTION
                        // 'use strict';
                        //
                        // var computer;
                        // var player;
                        // var random;
                        //
                        // player window.prompt('Choissez : Pierre, Feuille, Ciseau');
                        //
                        // player = player.toLowerCase();
                        //
                        // random = Math.random();
                        //
                        // if(random < (1/3)) {
                        // 	computer = 'pierre';
                        // }
                        // else if(random < 2 / 3)     // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
                        // {
                        //     computer = 'feuille';
                        // }
                        // else                        // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
                        // {
                        //     computer = 'ciseau';
                        // }
                        //
                        // if (computer == player) {
                        //
                        // 	document.write('<p>Vous avez choisi la même chose : égalité !</p>');
                        //
                        // } else {
                        //
                        // 	switch(computer) {
                        //
                        //         case 'ciseau':
                        //         if(player == 'pierre')
                        //         {
                        //             document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
                        //         }
                        //         else // player == 'feuille'
                        //         {
                        //             document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
                        //         }
                        //         break;
                        //
                        //     	case 'feuille':
                        //         if(player == 'pierre')
                        //         {
                        //             document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
                        //         }
                        //         else // player == 'ciseau'
                        //         {
                        //             document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
                        //         }
                        //         break;
                        //
                        //         case 'pierre':
                        //         if(player == 'feuille')
                        //         {
                        //             document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
                        //         }
                        //         else // player == 'ciseau'
                        //         {
                        //             document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
                        //         }
                        //         break;
                        //
                        //         default:
                        //         document.write('le puit n\'existe pas en chifoumi');
                        //         break;
                        //
                        //     }
                        // }
