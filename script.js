let day = 5;
if (day <= 10) {
    console.log('first decade');
} else if (day <= 20) {
    console.log('second decade');
} else if (day <= 31) {
    console.log('third decade');
} else {
    console.log('incorrect parameters');
}


let month = 1;
const condition = month === 1 || month === 2 || month === 12;
const condition2 = month === 3 || month === 4 || month === 5;
const condition3 = month === 6 || month === 7 || month === 8;
const condition4 = month === 9 || month === 10 || month === 11;
if (condition) {
    console.log('зима');
} else if (condition2) {
    console.log('весна');
} else if (condition3) {
    console.log('лето');
} else if (condition4) {
    console.log('осень');
} else {
    console.log('неверные параметры');
}


let min = 55;
if (min <= 15) {
    console.log('первая четверть');
} else if (min <= 30) {
    console.log('вторая четверть');
} else if (min <= 45) {
    console.log('третья четверть');
} else if (min <= 59) {
    console.log('четвертая четверть');
} else {
    console.log('неверные параметры');
}

let age = 18;
age < 18 ? console.log('иди домой, тебе нет 18-ти') : console.log('добро пожаловать');