// 소수판별 1
function 소수판별(n) {
    for (let i = 2; i < n; i++) {
        if (n % 2 === 0) {
            console.log('No');
            return false;
        }
    }

    if (n === 1) {
        console.log('No');
        return false;
    }

    console.log('Yes');
}

소수판별(1)
소수판별(10)
소수판별(5)


// 소수판별 2
function 소수판별(n) {
    for (let i = 2; i < n; i++) {
        if (n % 2 === 0) {
            console.log('No');
            return false;
        }
    }

    if (n === 1) {
        console.log('No');
        return false;
    }

    console.log('Yes');
}

소수판별(5);
소수판별(1);
소수판별(100);

// 콜백함수 익명함수로 1
function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback(i);
    }
}

callThreeTimes(function(i) {
    console.log(`${i}번쨰 함수 호출`);
});

// 콜백함수 익명함수로 2
function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback(i);
    }
}

callThreeTimes(function(i) {
    console.log(`${i}번째 함수입니다`);
})

// 10 -> 2진수 1
let dec = 160;
let arrBi = [];
while (dec) {
    arrBi.push(dec % 2);
    dec = Math.floor(dec / 2); // 정수반환을 위해
}
console.log(arrBi.reverse().join(""));

// 10 -> 2진수 2
let dec = 160;
let arrBi = [];

while (dec) {
    arrBi.push(dec % 2);
    dec = Math.floor(dec / 2);
}
console.log(arrBi.reverse().join(""));

// 10 -> 2진수 3
let dec = 160;
let arrBi = [];

while (dec) {
    arrBi.push(dec % 2);
    dec = Math.floor(dec / 2);
}

console.log(arrBi.reverse().join(""));

// 데이터바인딩 1
let products = [
    { id: 0, price: 90000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' },
];

const title = document.querySelectorAll('#title');
const price = document.querySelectorAll('#price');

for (let i = 0; i < products.length; i++) {
    title[i].innerHTML = `${products[i].title}`;
    price[i].innerHTML = `가격 : ${products[i].price}원`;
}

// 데이터바인딩 2

const title = document.querySelectorAll('#title')
const price = document.querySelectorAll('#price')

for (let i = 0; i < products.length; i++) {
    title[i].innerHTML = `${products[i].title}`;
    price[i].innerHTML = `가격 : ${products[i].price}원`;
}

// 요일확인 1
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function checkDay(a, b) {
    let theDay = new Date(`2022-${a}-${b}`);

    console.log(day[theDay.getDay()]);
}

checkDay(6, 13);

// 요일확인 2
function checkDay(a, b) {
    const theDay = new Date(`2022-${a}-${b}`);
    console.log(day[theDay.getDay()]);
}

checkDay(6, 13)