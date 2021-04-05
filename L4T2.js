"use strict";

let basket = [
    {
        id: 1,
        category: 'выпечка',
        manufacturer: 'Фили Бэйкер',
        name: 'торт',
        price: 420,
        quantity: 1
    },
    {
        id: 2,
        category: 'алкоголь',
        manufacturer: 'Koor',
        name: 'вино',
        price: 750,
        quantity: 3
    },
    {
        id: 3,
        category: 'товары для дома',
        manufacturer: 'Да будет свет!',
        name: 'свечи',
        price: 59,
        quantity: 5
    }];

function countBasketPrice(basket) {
    return basket.reduce((totalAmount, basketElem) => totalAmount += basketElem.price * basketElem.quantity, 0);
}

alert(`Стоимость вашей корзины = ${countBasketPrice(basket)}`);
