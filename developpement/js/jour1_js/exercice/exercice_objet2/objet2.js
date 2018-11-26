var room = new Object();

// var room = {};

room['brand'] = 'salon';
// room.brand = 'salon';
room['color'] = 'blue';

room.year = '2017';

room.names = ['livingroom', 'bedroom', 'mezaninne', 'terrace']; /*[0 = Gérard]*/

console.log(room['brand']);
console.log(room.brand);

console.log(room);

console.log(room.names[3]); // Jean

document.write('Voici mon petit appartement, : ' + room.brand + ' ' + room.color + ' mais je préfère ma terrasse depuis : ' + room.year);
