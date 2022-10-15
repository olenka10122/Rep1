let n = 100;
const m = 10;
let i = 0;
while (m < n) {
    n = n/m;
    i += 1;
}
console.log(i);


const year0fFly = 1961;
let count = 0;
for (let i = 1800; i < 20222; i += 1) {
    if (i === year0fFly) {
        break;
    } count += 1;
}
console.log(count); 

