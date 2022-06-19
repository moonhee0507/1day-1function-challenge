// 구구단

function gogodan(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

gogodan(2);

function gugudan() {
    for (let k = 2; k <=9; k++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${k} x ${j} = ${k * j}`);
        }
    }
}

gugudan();

// =================================================================

// 출석부

let 출석부 = ['윈터', '닝닝', '카리나', '지젤'];

function isName(name) {
    for (let i = 0; i < 출석부.length; i++) {
        if (name == 출석부[i]) {
            console.log(`${출석부[i]} 있어요!`)
            return; // if 문의 조건을 만족하면 함수 실행을 중단하고 빠져나가라
        }
    }
}

isName('카리나');

// =================================================================

// 모의고사 평균 계산

function cal(arr, b) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] // arr 안의 내용들을 다 더한다
    }

    if (result / arr.length > b) {
        console.log(`${result / arr.length - b}점 만큼 떨어졌네요. 아쉽!`);
    } else {
        console.log(`${b - result / arr.length}점 만큼 올랐네요. 축하!`);
    }
}

cal([20, 30, 40], 20);

// =================================================================

// 주어진 배열 안의 딸기를 키위로 교체

const array = ['🍌', '🍓', '🍇', '🍓'];

function replace(array) {
    let newReplace = Array.from(array);
    for (let i = 0; i < newReplace.length; i++) {
        if (newReplace[i] === '🍓') {
            newReplace[i] = '🥝'
        }
    }
    return newReplace;
}

const result = replace(array);

console.log(result);

// 과일 교체 함수

function replace(array, from, to) {
    let newReplace = Array.from(array);
    for (let i = 0; i < newReplace.length; i++) {
        if (newReplace[i] === from) {
            newReplace[i] = to;
        }
    }
    return newReplace;
}

const result = replace(array, '🍌', '🍇');

console.log(result);