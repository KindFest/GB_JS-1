"use strict";
function sumNumbers(a, b) {
    return a + b;
}

function difNumbers(a, b) {
    return a - b;
}

function mulNumbers(a, b) {
    return a * b;
}

function divNumbers(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return (sumNumbers(arg1, arg2));
        case '-': return (difNumbers(arg1, arg2));
        case '*': return (mulNumbers(arg1, arg2));
        case '/': return (divNumbers(arg1, arg2));
    }
}

alert(mathOperation(9, 2, '+'));
alert(mathOperation(9, 2, '-'));
alert(mathOperation(9, 2, '*'));
alert(mathOperation(9, 2, '/'));
