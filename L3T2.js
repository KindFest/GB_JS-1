"use strict";

let basket = [['торт', 420, 1], ['вино', 750, 2], ['свечи', 59, 5]];

function countBasketPrice(basketElem) {
    return basketElem[1] * basketElem[2];
}

let totalAmount = 0;
basket.forEach(function (basketElem) {
    totalAmount += countBasketPrice(basketElem);
});
alert(`Стоимость вашей корзины = ${totalAmount}`);
