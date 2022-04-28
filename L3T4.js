"use strict";

for (let i = 1; i < 21; i++) {
    let string = '*';
    for (let j = 1; j < i; j++) {
        string += '*';
    }
    console.log(`${string} ${i}`);
}
