/* const names = ['Alex', 'Ivan', 'Tony', 'Petr'];

const findElem = names.find((el) => el === 'Tony');
console.log(findElem); */



/* const names = [{name: 'Alex',}, {name: 'Ivan'}, {name: 'Tony'}];

const filterArr = names.filter(
    (el, i) => (el.name === 'Tony' || el.name === 'Alex') && i !== 0
);
console.log(filterArr); */




/* const names = [{name: 'Alex',}, {name: 'Ivan'}, {name: 'Tony'}];

const mapArr = names.map((el)=> ({name: el.name, handCout: 2}));

console.log(mapArr); */




/* const names = [{name: 'Alex',}, {name: 'Ivan'}, {name: 'Tony'}];
console.log(names);

const arr = names.forEach((el) => (el.name = 'Unknown'));

console.log(arr);
console.log(names); */




/* const arr = [1, -2, 5, -6, 9, -8, 5];

const result = arr.reduce((prev, cur) => {
    if (cur > 0) {
        return prev + cur;
    }
    return prev;
});
console.log(result); */


//1.1
/* const positiveEvenSum = (arr) => {
    const result = arr.reduce((prev, cur)=> {
        if(cur%2 === 0 && cur > 0) {
            return prev + cur;
        }
        return prev;
    }, 0);
    return result;
};
console.log(positiveEvenSum([1, 2, -3, -4, 5, 6])); */

//1.2

/* const positiveEvenSum = (arr) => {
    arr.reduce((prev, cur)=> {
        if(cur % 2 === 0 && cur > 0) {
            return prev + cur;
        }
        return prev;
    }, 0);
    return result;
};
console.log(positiveEvenSum([1, 2, -3, -4, 5, 6]));  */

//1.3
/* const positiveEvenSum = (arr) => arr.filter((el) => el >0 && el % 2 === 0).reduce((prev, cur) => prev + cur);

console.log(positiveEvenSum([1, 2, -3, -4, 5, 6]));  */




//2.1

//const arr = [1, 2, 5, 6, 9, -8, 5, 7, 2, 7, 2, 3];

/* function uniqArrItem(itemArray) {
    const result = [];

    for (let i = 0; i < itemArray.length; i += 1) {
        if (!result.includes(itemArray[i])) {
        result.push(itemArray[i]);
    }
}
    return result;
}

const uniqResult = uniqArrItem([1, 2, 5, 6, 9, 5, 7, 2, 7, 3, 13]);

console.log(uniqResult); */



//2.2


/* function uniqArrItem (arr) {
    return arr.filter((el, i, array) => !array.includes(el, i + 1));
}
const uniqResult = uniqArrItem([1, 2, 3, 4, 1, 5, 2, 3])
console.log(uniqResult); */



