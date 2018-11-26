var car = new Object();
// var car = {};

car['brand'] = 'Alfa Roméo';
// car.brand = 'Alfa Roméo';
car['color'] = 'red';

car.year = '1974';

car.passengers = ['Gérard', 'Jean', 'Alan', 'Céline']; /*[0 = Gérard]*/

console.log(car['brand']);
console.log(car.brand);

console.log(car);

console.log(car.passengers[1]); // Jean

document.write('Voici une : ' + car.brand + ' ' + car.color + ' de ' + car.year);
