const name = 'Alex';
const nameToNumber = Number(name);
console.log(nameToNumber);

const age = 26;
const ageToString = String(age);
console.log(typeof ageToString);





console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean({}));

console.log(typeof +'45');
console.log(typeof Number('45'));

console.log(typeof (2 + 5));

console.log(2 == 3);
console.log(2 == 2);
console.log(2 != 2);
console.log(2 < 3);
console.log(Boolean(2 > 3));

console.log(2 + '3');
console.log('2' +'3');
console.log(2 + 3);
console.log('2' + 2 + 3);
console.log(2 + 2 + '3');
console.log(5 + 5);
console.log(2 * 6);
console.log(2 + '2'*3);
console.log('2' + 2 * 3);

console.log(2 == '2');
console.log(2 === '2');

console.log(5 > 4);
console.log('ананас'>'яблоко');
console.log('5'>'12');
console.log(undefined == null);
console.log(undefined === null);
console.log(null =='\n0\n');
console.log(null === +'\n0\n');
console.log(''+1+0);
console.log(''-1+0);
console.log(true + false);
console.log(6/'3');
console.log('2'*'3');
console.log(4 + 5 +'px');
console.log('$'+ 4 + 5);
console.log('4'-2);
console.log('4px'-2);
console.log(7/0);
console.log(' -9'+5);
console.log(' -9'-5);
console.log(null + 1);
console.log(undefined + 1); 
console.log('\t\n'- 2);

console.log(typeof {});
console.log(typeof[]);

const towns = ['Moscom', 'Paris', 'London', 'Nizhny Novgorod'];
console.log(towns);
console.log(towns[0]);

console.log(towns);
towns[1] = 'Milan';
console.log(towns);

towns[4] = 'St/ Peterburg';
towns[9] = 'Berlin';
console.log(towns.length);

towns.push('St Peterburg');
console.log(towns);

towns[towns.length] = 'Orel';
console.log(towns);

const film = ['Zoloto durakov', 'Charodei', 'Orudiya smerty'];
console.log(film);
console.log(film[0]);

film.push('Garry Potter')
console.log(film);

console.log(film[3]);


