let products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 32000, title: 'Check Shirt' },
    { id: 2, price: 15000, title: 'Black Tie' },
    { id: 3, price: 67000, title: 'Springfield Shirt' },
    { id: 4, price: 82000, title: 'Red Mini Dress' },
];

let 낮은가격순 = function () {
    products.sort(function (a, b) {
        return a.price - b.price;
    });

    console.log(products);
};

낮은가격순();

let 높은가격순 = function () {
    products.sort(function (a, b) {
        return b.price - a.price;
    });

    console.log(products);
};

높은가격순();