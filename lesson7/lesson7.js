/* const number = 1;
const increment = (a) => {
    a += 1;
};

console.log(number, 'one');
increment(number);
console.log(number, 'two'); */



/* const arr = [1, 2, 3, 4];
const arrPush = (arr) => {
    arr.push(5);
};
console.log(arr, 'one');
arrPush(arr); */



/* const user = {name: 'Alex'};
const user2 = user;
user.age = 18;
user2.name = 'Ivan';

console.log(user);
console.log(user2); */



/* const user = {name: 'Alex'};
const user2 = Object.assign({}, user);

user.age = '18';
user2.name = 'Ivan';
console.log(user);
console.log(user2); */



/* const arr = [1, 2, 3];
const arr2 = [...arr];// ... - spread оператор

arr.push(4);

console.log(arr);
console.log(arr2); */




/* const arr = [1, 2, 3, 4];
const arrNew = [...arr];
const arrPush = (arr) => {
    arr.push(5);
};
console.log(arr, 'one');
arrPush(arr);
console.log(arr, 'two');

JSON.parse()
JSON.stringify() */




/* const user = {name: 'Alex', age: 18};
console.log(JSON.stringify(user), user); */



/* const user = {name: 'Alex', age: 18};
const user2 = JSON.parse(JSON.stringify(user));

user.name = 'Ivan';
user2.age = 20;

console.log(user);
console.log(user2); */



/* const infinitySum = (...arg) => {
    return arg.reduce((prev, cur) => prev + cur, 0);
};

console.log(infinitySum(1, 23, 5)); */



/* const user = {name: 'Alex', age: 18, city: 'London'};

const userName = user.name;// =const {name} = user;
const userAge = user.age
console.log(userName, 'userName');

const {name, ...restParams} = user;
console.log(name, 'name');
console.log(restParams, 'restParams'); */




/* const arraySum = (arr) => {
    let result = 0;
    for(let value of arr) {
        result += value;
    }
    return result;
};

console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8])); */



const arr = ['Ivan', 'Alex', 'Tony'];
const obj = {name: 'Alex', age: 18};

for (let value in obj) {
   console.log(obj[value]); 
}
