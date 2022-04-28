"use strict";

function numberToObj(number) {
    let obj = {}
    if (isNaN(number) || number < 0 || number > 999) return obj;
    obj = {
        'единицы': Math.trunc(number % 10),
        'десятки': Math.trunc((number % 100) / 10),
        'сотни': Math.trunc(number / 100)
    }
    return obj;
}

const number = parseInt(prompt('Введите число от 0 до 999:'));
let obj = numberToObj(number);

if (obj?.единицы === undefined) {
    console.log('Out of range!');
    console.log(obj);
} else console.log(obj);
