// Promise(π β π₯ β π³) β 

// const getHen = () => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve('π'), 1000);
//     }
// );

// const getEgg = hen => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve(`${hen} => π₯`), 1000);
//     }
// );

// const cook = egg => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve(`${egg} => π³`), 1000);
//     }
// );

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));


// Promise(π β π₯ β π³) β‘
// const getHen = () => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve('π', 1000));
//     }
// );

// const getEgg = hen => new Promise(
//     (resolve, reject) => {
//         setTimeout(() => resolve(`${hen} => π₯`, 1000));
//     }
// );

// const cook = egg => new Promise(
//     (resolve, reject) => {
//         setTimeout(resolve(`${egg} => π³`), 1000);
//     }
// );

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));
    
// Promise(π β π₯ β π³) β’

// const getHen = () => new Promise(
//     (resolve, reject) => {
//         setTimeout(resolve('π'), 1000);
//     }
// );

// const getEgg = hen => new Promise(
//     (resolve, reject) => {
//         setTimeout(resolve(`${hen} => π₯`), 1000);
//     }
// );

// const cook = egg => new Promise(
//     (resolve, reject) => {
//         setTimeout(resolve(`${egg} => π³`), 1000);
//     }
// );

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))


// 1λΆν° 100κΉμ§ 8μ΄ λͺκ°μΌκΉμ?? β 
// (Array(100).fill(1).map((index, value) => index + value) + '').split('8').length - 1

// 1λΆν° 100κΉμ§ 8μ΄ λͺκ°μΌκΉμ?? β‘
// (Array(100).fill(1).map((index, value) => index + value) + '').split('8').length - 1
// 1λΆν° 100κΉμ§ 8μ΄ λͺκ°μΌκΉμ?? β’
// (Array(100).fill(1).map((index, value) => index + value) + '').split('8').length - 1

// μ½λ°±ν¨μ β 
// function callThreeTimes(callback) {
//     for (let i = 0; i <= 2; i++) {
//         callback(i)
//     }
// }

// function λ΄ν¨μ(i) {
//     console.log(`${i}λ²μ§Έ ν¨μμλλ€.`)
// }

// callThreeTimes(λ΄ν¨μ)

// μ½λ°±ν¨μ β‘
// function callThreeTimes(callback) {
//     for (let i = 0; i <= 2; i++) {
//         callback(i)
//     }
// }

// function λ΄ν¨μ(i) {
//     console.log(`${i}λ²μ¨° ν¨μμλλ€.`);
// }

// callThreeTimes(λ΄ν¨μ)

// μ½λ°±ν¨μ β’
// function callThreeTimes(callback) {
//     for (let i = 1; i <= 3; i++) {
//         callback(i)
//     }
// }

// function λ΄ν¨μ(i) {
//     console.log(`${i}λ²μ§Έ ν¨μμλλ€.`);
// }

// callThreeTimes(λ΄ν¨μ);

// ν μΈκ° κ³μ°κΈ° β 
// function ν μΈκ°κ³μ°(a, b) {
//     let ν μΈκΈμ‘ = a * 0.1;

//     if (b == true) {
//         let μ΅μ’κΈμ‘ = a - ν μΈκΈμ‘ - 1.5;
//         return parseFloat(μ΅μ’κΈμ‘.toFixed(2));
//     } else if (b == false) {
//         let μ΅μ’κΈμ‘ = a - ν μΈκΈμ‘;
//         return parseFloat(μ΅μ’κΈμ‘.toFixed(2));
//     }
// }

// console.log(ν μΈκ°κ³μ°(10.7, true))