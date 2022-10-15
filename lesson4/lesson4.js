/* function showMessage(message) {
    console.log(message);
}
showMessage('Hi');
showMessage('Hello');
showMessage('Привет');
showMessage('Как дела?'); 


 function sum(a, b =2) {
    console.log(a + b);
    }
sum(2, 3);
sum(2); 

function sum(a, b) {
    return a + b;
    }
const result = sum(3, 5);

    console.log(result);
    console.log(sum(4, 6));

function positiveSum(a, b) {
    if (a > 0 && b > 0) {
        return a + b;
    }
    return    'Ошибка вычисления';
}
console.log(positiveSum(2, 3));
console.log(positiveSum(-2, 3)); 


 function getName (){
    const userName = 'Alex';
    return userName;
 }

 function getUserName (){
    console.log(userName);
 }

 console.log(getName());
 console.log(getUserName()); */

/* const name = 'Alex';

 function sayHello(message = 'Hello') {
    const name = 'Ivan';
    console.log(`${message} - ${name} !!`);
 }
 sayHello();
 sayHello('Привет');
 */

/* let a = 0;
 function sum (a, b = 3) {
    const result = a + b;
    a += 1;
    console.log(result);
 }
 sum();
 sum(2);
 sum(2); */

/* function greeting(userName = "Guest") {
  console.log(`Hello - ${userName}`);
}
greeting("Ivan");
greeting("Kate");
greeting("");
greeting(3); */

/* function stepen (a, b = 1){
    return a ** b;
}
console.log(stepen(2));
console.log(stepen(2, 10)); */

/* const sayHello = function (name) {
    console.log(`Hello ${name}`);

}
console.log(sayHello); */

/* const sayHello = function (name) {
    console.log(`Hello ${name}`);
};
const funcExample = function (callback) {
    for (let i = 0; i < 1000000; i += 1) {}
    callback('Alex');
};

sayHello('Ivan');
funcExample(sayHello); */

/* sum(1, 2);
function sum(a, b) {
    console.log(a + b);
} */

const getname = (name) => `Name-${name}`;
console.log(getname("Alex"));
console.log(getname("Ivan"));

const getnameTwo = (nmae) => {
  return `Name-${name}`;
};

const quadro = (a) => a ** 2;
console.log(quadro(3));
