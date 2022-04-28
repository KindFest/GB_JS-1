"use strict";
let basketItem = {
    render(item) {
        return `<div class="basket_list">
                    <div>Наименование: <b>${item.name}</b></div>
                    <tr><td>Количество: <b>${item.quantity}</b></td>
                    <td>Цена за шт.: <b>${item.price}</b></td>
                    <td>Стоимость: <b>${item.quantity * item.price}</b></td></tr>
                </div><br/>`;
    }
}

let basket = {
    basketList: null,
    basketItem,
    products: [
        {
            id: 1,
            category: ['выпечка', 1],
            manufacturer: 'Фили Бэйкер',
            name: 'торт',
            price: 420,
            quantity: 1
        },
        {
            id: 2,
            category: ['алкоголь', 2],
            manufacturer: 'Koor',
            name: 'вино',
            price: 750,
            quantity: 3
        },
        {
            id: 3,
            category: ['товары для дома', 3],
            manufacturer: 'Да будет свет!',
            name: 'свечи',
            price: 59,
            quantity: 5
        },],

    init() {
        this.basketList = document.querySelector('.basket');
        this.render(this.products);
    },

    render() {
        if (this.products.length) {
            this.products.forEach(item => {
                this.basketList.insertAdjacentHTML('beforeEnd', this.basketItem.render(item));
            });
            this.basketList.insertAdjacentHTML('beforeEnd', `<br/>Стоимость вашей корзины = <b>${this.countBasketPrice()} руб.</b>`)
        } else {
            this.basketList.textContent = 'В корзине нет товаров';
        }
    },

    countBasketPrice() {
        return this.products.reduce((totalAmount, basketElem) => totalAmount += basketElem.price * basketElem.quantity, 0);
    }
}

basket.init();