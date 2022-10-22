/* function quadro (a, b){
    return a ** b;
}
console.log(quadro(2, 2));


summ(3, 7);
function summ(a, b) {
    console.log(a + b);
} */


/* function uravn(a, b, c) {
    return (a - b) / c;
}
console.log(uravn(10, 2, 2)) */


/* function week(a) {
    return a = 1;
    }
const result = 'Понедельник';

    console.log(result); */

    

/*     function ravenstvo(a, b){
        return a === b; {
            return true;
        }
    }
    console.log(ravenstvo(2, 2));
    console.log(ravenstvo(2, 7)); */



/* function urav(a, b) {
    if ((a + b) > 10); {
        return true;
    }
}
console.log(urav(2, 2)); */
// не решена//

//№10
const getDigitsSum = (num)=> {
    const str = `${num}`;
    let result = 0;
    for(let i = 0; i < str.length; i += 1) {
        result += +str[i]; 
    }
    return result;
}
console.log(getDigitsSum(123));







//№11
const filterYears = ()=> {
    const result = [];
    for(let i = 1; i < 2020; i+=1){
        if(getDigitsSum(i) === 13){
result.push(i); 
        }
    }
    return result;
}
console.log(filterYears());


//12
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
};
console.log(isEven(7));
console.log(isEven(12));


//13
const filterArr = (arr) => {
    const result =[]
    for(let i = 0;  i < arr.lenght; i += 1) {
        if (isEven(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));


const lessNine = (num)=> {
    console.log(`Функция lessNine вызвана с параметром ${num}`);
    if(getDigitsSum(num) > 9) {
        return lessNine(getDigitsSum(num));
    }
    return getDigitsSum(num);
}
console.log(lessNine(156957565523));


