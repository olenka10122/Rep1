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

