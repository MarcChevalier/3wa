'use strict'

// var jeveuxremise = window.prompt("Voulez-vous une remise ?");
// if (jeveuxremise == "oui" || jeveuxremise == "yes")
// {
//     montantremise = window.prompt("De quel montant ?");
// }
// else if (jeveuxremise == "non" || jeveuxremise == "no")
//
// {
//
// }
//
//
// totalHT = window.prompt("Voici le prix hors taxe");
//
// alert('totalHT');
//
//
//
//
//
// number1 = parseFloat(number1);
// tva = 20;
// totalTVA = number1 * (tva / 100);
// totalTTC = number1 + totalTVA;
// totalHT = number1 - (tva /100);
//
// document.write(totalTTC);
// document.write(totalTVA);
// document.write(totalRemise);

                              // CORRIGÉ

const TAUX_DE_TVA = 20;
var pourcentage;
var montantTVA;
var montantTTC;

var montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
var remise = window.prompt('Souhaitez-vous une remise ?');


if (remise == 'oui' || remise == 'yes') {
	pourcentage = parseFloat(window.prompt('Montant de la remise en % :'));
    montantHT = montantHT - (montantHT * pourcentage / 100);
}


montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

if (remise == 'oui' || remise == 'yes') {
	    document.write('<p>Une remise de ' + pourcentage + '% a été appliquée sur le montant HT.</p>');

} else {
    document.write("<p>Aucune remise n'a été appliquée.</p>");
}
