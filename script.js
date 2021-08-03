/*

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

function checkDay(day) {
    if (day <= 10) {
        console.log('first decade');
    } else if (day <= 20) {
        console.log('second decade');
    } else if (day <= 31) {
        console.log('third decade');
    } else {
        console.log('incorrect parameters');
    }
}

checkDay(20)


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

function checkMonth(month) {
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
}

checkMonth(2)



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


function quarterHour(min) {
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
}

quarterHour(40)


let age = 18;
age < 18 ? console.log('иди домой, тебе нет 18-ти') : console.log('добро пожаловать');

function checkAge(age) {
    age < 18 ? console.log('иди домой, тебе нет 18-ти') : console.log('добро пожаловать');
}

checkAge(20)


function multiplicationEven (a, b) {
    let result = a;
    for (let i = a; i <= b; i++) 
        if ((i%2)===0) {
            result *= i;
        } 
        return result;
}

console.log(multiplicationEven(1, 20));




let i = 1;
let n = 1;

while (i < 100) {
    i++;
    n += i;
}
console.log(n);

let y = 1;
let m = 1;

do {
    y++;
    m += y;
} while (y < 100)

console.log(m);

let z = 0;

for (let x = 1; x <=100; x++) {
    z += x;
}

console.log(z);



let number = [1, 2, 3, 4, 5];
let numberSlice = number.slice(0, 3);
console.log(numberSlice);

let number2 = [1, 2, 3, 4, 5];
let numberSlice2 = number.slice(-2);
console.log(numberSlice2);


let num = '1124356712453';
function spliceNum(num, symbol) {
    let result = '';
    for (let i = 0; i < num.length; i++) {
        if ((num[i] % 2) != 0) {
            if (i != num.length - 1) {
                result += num[i] + symbol;
            } else {
                result += num[i];
            }
        } else {
            result += num[i];
        }
    }
    return result;
}
console.log(spliceNum(num, '-'));


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = ['Roma', 'Sasha', 'Vlad', 'Oleg'];
const arr3 = [1, 2, 3]

function changeHalfs(arr) {
    let arrResult = [];
    if ((arr.length) % 2 == 0) {
        let arrResult1 = arr.slice(0, (arr.length)/2);
        let arrResult2 = arr.slice((arr.length)/2);
        return arrResult = arrResult2.concat(arrResult1);
        
    } else {
    return 'ошибка'
}
}

console.log(changeHalfs(arr1));
console.log(changeHalfs(arr2));
console.log(changeHalfs(arr3));



const form = '(5465+6545)*(()()()(5145+2315)';

function num(zxc) {

    let res = '';
    for (let i = 0; i <= zxc.length; i++) {
        if (res >= 0) {
            let w = zxc[i];
            if (w == '(') {
                res++
            } else {
                if (w == ')') {
                    res--
                }
            }
        } else {
            return ('ошибка')
        }
    }
    if (res === 0) {
        return ('всё ок')
    }
    return ('ошибка')
}

console.log(num(form));


*/

const data1 = {
    a: 1,
    b: 1
};
const data2 = {
    a: 1,
    b: 1
};
const data3 = {
    a: 1,
    b: 2
};


function isEqual(firstObject, secondObject) {

    if (JSON.stringify(firstObject) === JSON.stringify(secondObject)) {
        return true
    }
    return false
}

console.log(isEqual(data1, data2));
console.log(isEqual(data1, data3));



console.log(Object.keys(data2));

function objKey(arr) {
    const arrs = [];

    for (let a in arr) {
        if (arr.hasOwnProperty(a)) {
            arrs.push(a)
        }
    }
    return arrs
}
console.log(objKey(data2));



console.log(Object.values(data3));

function objVal(arr) {
    const arrs = [];

    for (let x in arr) {
        if (arr.hasOwnProperty(x)) {
            arrs.push(arr[x])
        }
    }
    return arrs
    
}
console.log(objVal(data3));



