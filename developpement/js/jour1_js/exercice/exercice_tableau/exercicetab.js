var weekDays;

weekDays = new Array();
// weekDays = [];

weekDays[0] = 'Lundi';
weekDays[1] = 'Mardi';
weekDays[2] = 'Mercredi';
weekDays[3] = 'Jeudi';
weekDays[4] = 'Vendredi';
weekDays[5] = 'Samedi';
weekDays[6] = 'Dimanche';

weekDays[10] = 'chat';

// autre écriture

//weekDays = [ 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche' ]

console.log(weekDays);

document.write(weekDays[5]);

document.write('Le premier jour de la semaine est le ' + weekDays[0] + ' ');

var sundayIndex = 6;

document.write('et le dernier jour de la semaine est le ' + weekDays[sundayIndex] + '.');

// fonctionnalité de date

var today = new Date();

// today.getDay();
// today.getDate();
// today.getMonth();
// today. getFullYear();
