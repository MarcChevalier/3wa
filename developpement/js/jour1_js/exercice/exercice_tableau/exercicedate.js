/*var weekDays;
var today = new Date();*/


var dayNames   = new Array();
var monthNames = new Array(); //seconde option pour les tableaux

var weekDays = new Array();
var months = new Array();
/*
today.getDay = new Array();
today.getMonth = new Array();
today. getFullYear = new Array();
*/



weekDays[0] = 'Dimanche';
weekDays[1] = 'Lundi';
weekDays[2] = 'Mardi';
weekDays[3] = 'Mercredi';
weekDays[4] = 'Jeudi';
weekDays[5] = 'Vendredi';
weekDays[6] = 'Samedi';


months[0] = 'Janvier';
months[1] = 'Février';
months[2] = 'Mars';
months[3] = 'Avril';
months[4] = 'Mai';
months[5] = 'juin';
months[6] = 'juillet';
months[7] = 'Août';
months[8] = 'Septembre';
months[9] = 'Octobre';
months[10] = 'Novembre';
months[11] = 'Décembre';

today = new Date();

document.write('Nous sommes le ' + weekDays[today.getDay()] + ' '); // dayNames[5]
document.write(today.getDate() + ' ');
document.write(months[today.getMonth()] + ' '); //monthNames[8];
document.write(today.getFullYear() + '.');


console.log(weekDays[today.getDay()]);

console.log(today.getDate());

console.log(today.getMonth());
console.log(today.getFullYear());
