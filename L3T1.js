"use strict";

function checkPrime(n) {
    let i = 2;
    while (i < n - 1) {
        if (n % i == 0)
            return 1;
        i++;
    }
    return n;
}

let i = 1;
while (i < 101) {
    if (checkPrime(i) == i) console.log(i);
    i++;
}
