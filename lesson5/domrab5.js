//7

/* const charArr = ['.', '!', '@', '#' ,';', ':', '+', '$', '%', '^', '&', '*'];
const removeChar = (str)=> {
    for(let i = 0; i < charArr.length; i += 1){
        while(str.includes(charArr[i])) {
            str  = str.replace(charArr[i], '');
        }
    }
let result = ''
for(let i = 0; i < str.length; i += 1) {
    if (str [i] === '' && str [i - 1] !== '') {
        result += str[i];
    }
    if (str[i] !== '') {
        result += str[i];
    }
}
return result;
}
console.log(removeChar('каждый., - /hunter # ! wishes; : {} to $ % ^ & * знать')); */



const getSubstr = (str, char, pas = 'before') => {
    if(str.includes(char)) {
if (pas === 'before') {
    return str.slice(0, str.indexOf(char));
}
if (pas === 'after') {
    return str.slice(str.indexOf(char))
}
    }
    return 'Символ ${char} отсутсвует в строке ${str}';
};
console.log(getSubstr("My name Alex!", 'b', 'after'));