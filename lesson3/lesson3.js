if (true) {
    console.log('true');
}
if (false) {
    console.log('false');
}

const name = 'Alexa';
if (name === 'Ivan') {
    console.log('Привет ${name}');
} else if (name === 'Alex') {
    console.log('Привет друг ${name}');
} else if (name === 'Petr') {
console.log('Hi ${name}');
} else {
    console.log('Привет Незнакомец');
}


const age = 20;
if (age  < 18) { 
console.log('Доступ запрещен!');
} else if (age >=18) { 
console.log('Доступ разрешен!');
} else { 
console.log('Укажите свой возраст!');
}


if(true) {
    if(true) {
        console.log('true');
    } else {
        console.log('false');
    } 
} else {
    console.log('false');
}


const userName = 'Alex66';
result = userName === 'Alex' ? 'Hello Alex' : 'Hello User';
console.log(result);

const a = 2;
const b = 5;
const c = 15;
if (a<b) {
    b<c? console.log('с Самый большой') : console.log('В самый большой');
} else {
    a<c? console.log('с Самый большой') : console.log('а самый большой');
}

const userRole = 'admin';
switch (userRole) {
    case 'admin': 
        console.log('Это админ и он любит чай');
        break
    case 'user': 
    console.log('Это юзер и он любит колу');
        break;
case 'meneger' : 
    console.log('Это менеджер и он любит кофе');
    break;
    default:
        break;
}

let result3 = false || 0 || '' || 'fffff' || 0;
console.log(result3);

const d = 1;
const e = 2;
const f = 3;
if (d < e && e < f) {
    console.log('f самый большой');
} else if (d < e && e > f) {
    console.log('e самый большой');
} else if (d < f && f > e) {
    console.log('f самый большой');
} else if (d > e && d > f) {
    console.log('d самый большой');
}


const Pogoda = +70;
if (Pogoda <= -30) {
    console.log('Оставайтесь дома!');
} else if (Pogoda > -30 && Pogoda <= -10) {
    console.log('Сегодня холодно');
} else if (Pogoda > -10 && Pogoda <= +5) {
    console.log('Не холодно');
} else if (Pogoda > +5 && Pogoda <= +15) {
    console.log('Тепло');
} else if (Pogoda > +15 && Pogoda <= +25) {
    console.log('Очень тепло');
} else if (Pogoda > +25 && Pogoda < +35) {
    console.log('Жарко');
} else if (Pogoda >= +35) {
    console.log('Пекло');
}


let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;   //i = i + 1 //i++
}


let g = 0;
for (; g < 3; g++) {
    console.log(g);
}

let h = 0;
while (true) {
    if (h < 30) {
    h+= 1;
    } else {
        break;
    } console.log(h);
}


for(let j = 0; j <= 5; j += 1) {
    if (j === 1 || j === 3) continue;
    console.log(j);
}


const arr = [1,3,5,6,9,12,14,16,17,18,21,25,65,37];
const result2 = [];
for (let l = 0; l < arr.length; l += 1) {
    if(arr[l] % 2 === 0) {
        result2.push(arr[l]);
    }
}
console.log(result2);



