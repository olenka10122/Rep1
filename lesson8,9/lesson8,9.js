//console.log(this);

/* console.log(globalThis);
const test() {
    console.log(globalThis);
};
test(); */


  
/* const cubValue = (a)=> {
    return (b, c)=> {
return a * b * c;
    };
};

const first = cubValue(10);
console.log(first(10, 10));
console.log(first(2, 5));
console.log(first(5, 7));

const second = cubValue(4);
console.log(second(10, 10));
console.log(second(2, 5));
console.log(second(5, 7)); */




/* const cubValue = (a, b, c)=> a * b * c;
    console.log(cubValue(1, 2, 3));

const cubCaryValue = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
};

console.log(cubCaryValue(1)(3)(3));

const twoArgs = cubCaryValue(1)(3);

console.log(twoArgs(3));
console.log(twoArgs(4));
console.log(twoArgs(5)); */



/* const elem = { value: 'Привет!'};
function func(surname, name) {
    alert(`${this.value}, ${surname}, ${name}`);
};

func.call(elem, 'Петров', 'Петр');
 */


//9.Новая тема

/* const name = 'Alex';
const user = {
    name,
};

const {name: userName} = user; */


function CreateUser(userName, userAge) {
    this.name = userName;
    this.age = userAge;
    this.sayHi = function (){
        console.log(`Привет, меня зовут ${this.name}`);
    }
}


CreateUser.prototype.sayAge = function () {
    console.log(`Мне ${this.age}`);
}

const firstUser = new CreateUser('Alex', 26);
const secondtUser = new CreateUser('Tony', 24);
const fhirtUser = new CreateUser('Ivan', 20);

console.log(firstUser, secondtUser, fhirtUser);

secondtUser.sayHi();
secondtUser.sayAge();