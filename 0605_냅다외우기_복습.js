// Promise(🐓 ⇒ 🥚 ⇒ 🍳) ①

// const getHen = () => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve('🐓'), 1000);
//     }
// );

// const getEgg = hen => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve(`${hen} => 🥚`), 1000);
//     }
// );

// const cook = egg => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve(`${egg} => 🍳`), 1000);
//     }
// );

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));


// Promise(🐓 ⇒ 🥚 ⇒ 🍳) ②
// const getHen = () => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve('🐓', 1000));
//     }
// );

// const getEgg = hen => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve(`${hen} => 🥚`, 1000));
//     }
// );

// const cook = egg => new Promise(
//     (resolve, reject) => {
//         setTimeout(resolve(`${egg} => 🍳`), 1000);
//     }
// );

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));
    
// Promise(🐓 ⇒ 🥚 ⇒ 🍳) ③

// const getHen = () => new Promise(
//     (resolve, reject) => {
//         setTimeout(resolve('🐓'), 1000);
//     }
// );

// const getEgg = hen => new Promise(
//     (resolve, reject) => {
//         setTimeout(resolve(`${hen} => 🥚`), 1000);
//     }
// );

// const cook = egg => new Promise(
//     (resolve, reject) => {
//         setTimeout(resolve(`${egg} => 🍳`), 1000);
//     }
// );

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))


// 1부터 100까지 8이 몇개일까요?? ①
// (Array(100).fill(1).map((index, value) => index + value) + '').split('8').length - 1

// 1부터 100까지 8이 몇개일까요?? ②
// (Array(100).fill(1).map((index, value) => index + value) + '').split('8').length - 1
// 1부터 100까지 8이 몇개일까요?? ③
// (Array(100).fill(1).map((index, value) => index + value) + '').split('8').length - 1

// 콜백함수 ①
// function callThreeTimes(callback) {
//     for (let i = 0; i <= 2; i++) {
//         callback(i)
//     }
// }

// function 내함수(i) {
//     console.log(`${i}번째 함수입니다.`)
// }

// callThreeTimes(내함수)

// 콜백함수 ②
// function callThreeTimes(callback) {
//     for (let i = 0; i <= 2; i++) {
//         callback(i)
//     }
// }

// function 내함수(i) {
//     console.log(`${i}번쨰 함수입니다.`);
// }

// callThreeTimes(내함수)

// 콜백함수 ③
// function callThreeTimes(callback) {
//     for (let i = 1; i <= 3; i++) {
//         callback(i)
//     }
// }

// function 내함수(i) {
//     console.log(`${i}번째 함수입니다.`);
// }

// callThreeTimes(내함수);

// 할인가 계산기 ①
// function 할인가계산(a, b) {
//     let 할인금액 = a * 0.1;

//     if (b == true) {
//         let 최종금액 = a - 할인금액 - 1.5;
//         return parseFloat(최종금액.toFixed(2));
//     } else if (b == false) {
//         let 최종금액 = a - 할인금액;
//         return parseFloat(최종금액.toFixed(2));
//     }
// }

// console.log(할인가계산(10.7, true))