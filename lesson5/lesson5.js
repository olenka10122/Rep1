


/* const person = {
    name: 'Alex',
};
console.log(person);

person.age = 56;
person['city-name'] = 'NN';
console.log(person); */



/* const key = 'firstName'
const person = {
    [key]: 'Alex',
};
console.log(person);

person.age = 56;
person['city-name'] = 'NN';
person[4] = 4;
console.log(person); */



/* const key = 'firstName'
const person = {
    [key]: 'Alex',
};
console.log(person);

person.age = 56;
person['city-name'] = 'NN';
person[4] = 4;
console.log(person.firstName); 
console.log(person['city-name']); */



/* const key = 'firstName'
const person = {
    [key]: 'Alex',
};
console.log(person);

person.age = 56;
person['city-name'] = 'NN';
person[4] = 4;

console.log(person.age);

person.age = 26;
console.log(person.age);

console.log(person.height);
person.height = 193;
console.log(person.height); */



/* const key = 'firstName'
const person = {
    [key]: 'Alex',
    sayHello: function () {
        console.log('Привет, я Alex');
    }
};
console.log(person);

person.age = 56;
person['city-name'] = 'NN';
person[4] = 4;

console.log(person.age);

person.age = 26;
console.log(person.age);

console.log(person.height);
person.height = 193;
console.log(person.height);

delete person.age;
console.log(person.age);

person.sayHello(); */



/* const key = 'myFavoriteFilm'
const film = {
    [key]: 'Золото дураков',
        
};
console.log(film);

film.years = 2008;
film.nameDirector = 'Энди Теннант';
film.country = 'USA';
console.log(film);

film.sbory = '111 000 000$'

delete film.years;
console.log(film); */



/* const number = 100;
console.log(number.toString); */


/* const str = 'hello world';
str[0] = 'H';
console.log(str[0]); */

/* const str = 'hello world';
const newstr = 'Hello world';

console.log(str);
console.log(newstr); */



const isUpperCase = (str, i) => {
    if(str[i] === str[i].toUpperCase()) {
        return true; 
    } 
    return false;
}
console.log(isUpperCase('AbcdEGRT', 0));
console.log(isUpperCase('Abchghghgh', 4));
console.log(isUpperCase('Fjfhfhfhh', 6));
