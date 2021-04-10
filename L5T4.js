"use strict";
let catalogItem = {
    render(item) {
        return `<div class="basket_list">
                    <div>Наименование: <b>${item.name}</b></div>
                    <tr><td>Количество: <b>${item.quantity}</b></td>
                    <td>Цена за шт.: <b>${item.price}</b></td>
                    </div><br/>`;
    }
}

let catalog = {
    catalogID: null,
    catalogList: null,
    catalogItem,
    category: ['Выпечка', 'Алкоголь', 'Товары для дома'],
    products: [
        {
            id: 1,
            category: 1,
            manufacturer: 'Фили Бэйкер',
            name: 'торт',
            price: 420,
            quantity: 1
        },
        {
            id: 2,
            category: 2,
            manufacturer: 'Koor',
            name: 'вино',
            price: 750,
            quantity: 3
        },
        {
            id: 3,
            category: 3,
            manufacturer: 'Да будет свет!',
            name: 'свечи',
            price: 59,
            quantity: 5
        },
        {
            id: 4,
            category: 2,
            manufacturer: 'Абруа',
            name: 'шампанское',
            price: 550,
            quantity: 2
        },
        {
            id: 5,
            category: 2,
            manufacturer: 'Jeck',
            name: 'виски',
            price: 1750,
            quantity: 7
        },
        {
            id: 6,
            category: 2,
            manufacturer: 'Амарето',
            name: 'ликер',
            price: 950,
            quantity: 2
        },
    ],
    init(catalogID) {
        this.catalogID = catalogID;
        this.catalogList = document.querySelector('.catalog');
        this.render(this.products);
    },

    render() {
        this.catalogList.insertAdjacentHTML('beforeEnd', `<h1>${this.category[this.catalogID - 1]}</h1>`);
        this.products.forEach(item => {
            if (item.category == this.catalogID)
                this.catalogList.insertAdjacentHTML('beforeEnd', this.catalogItem.render(item));
        });
    },
}

catalog.init(2);