// 삼육구 게임 ①
function 삼육구(number) {
    let nums = number.toString().split('');
    let clap = [];

    for (let num of nums) {
        if (num === '3' || num === '6' || num === '9') {
            clap.push('짝👏🏻');
        }
    }

    return clap;
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));

// 삼육구 게임 ②
function 삼육구(number) {
    let nums = number.toString().split('');
    let clap = [];

    for (let num of nums) {
        if (num === '3'|| num === '6' || num === '9') {
            clap.push('짝👏🏻');
        }
    }

    return clap;
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));

// 삼육구 게임 ③
function 삼육구(number) {
    let nums = number.toString().split('');
    let clap = [];

    for (let num of nums) {
        if (num === '3' || num === '6' || num === '9') {
            clap.push('짝👏🏻');
        }
    }

    return clap;
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));

// 별트리 ①
// 재현님 방법
const level = 5;

for (let i = 1; i <= level; i++) {
    let tree = "";
    
    // 공백 담당
    for (let v = 1; v <= level - i; v++) {
        tree = tree + " ";
    }

    // 별 담당
    for (let s = 1; s <= i * 2 - 1; s++) {
        tree = tree + "*";
    }

//     console.log(tree);
// }
// 제로초님 방법
const level = 5;

for (let i = 1; i <= level; i++) {
    console.log(" ".repeat(level - i) + "*".repeat(i * 2 - 1));
}

// 별트리 ②
// 재현님 방법
const level = 5;

for (let i = 1; i <= level; i++) {
    let tree = "";

    // 공백 담당
    for (let v = 1; v <= level - i; v++) {
        tree = tree + " ";
    }

    // 별 담당
    for (let s = 1; s <= s * 2 - 1; s++) {
        tree = tree + "*";
    }

    console.log(tree);

}

// 제로초님 방법
const level = 5;

for (let i = 1; i <= level; i++) {
    console.log(" ".repeat(level - i) + "*".repeat(i * 2 - 1));
}

// 별트리 ③
// 재현님 방법
const level = 5;

for (let i = 1; i <= level; i++) {
    let tree = "";

    // 공백 담당
    for (let v = 1; v <= level - i; v++) {
        tree = tree + " ";
    }

    // 별 담당
    for (let s = 1; s <= i*2 -1; s++) {
        tree = tree + "*";
    }

    console.log(tree);
}

// 제로초님 방법
const level = 5;

for (let i= 1; i <= level; i++) {
    console.log(" ".repeat(level-i) + "*".repeat(i*2 - 1));
}

// 매개변수의 활용 ①
function earnings(name, wage=8590, hours=40) {
    console.log(`# ${name} 급여 정보`);
    console.log(`- 시급: ${wage}원`);
    console.log(`- 근무시간: ${hours}시간`);
    console.log(`- 급여: ${wage*hours}원`);
}

// 최저 임금으로 최대한 일하는 경우
earnings('김열정');

// 시급 1만원으로 최대한 일하는 경우
earnings('이열정', 10000);

// 시급 1만원으로 52시간 일하는 경우
earnings('박열정', 10000, 52);

// 매개변수의 활용 ②
function earnings(name, wage=8590, hours=40) {
    console.log(`# ${name} 급여 정보`);
    console.log(`- 시급: ${wage}원`);
    console.log(`- 근무시간: ${hours}시간`);
    console.log(`- 급여: ${wage*hours}원`);
}

// 최저 임금으로 최대한 일하는 경우
earnings('김열정');

// 시급 1만원으로 최대한 일하는 경우
earnings('이열정', 10000);

// 시급 1만원으로 52시간 일하는 경우
earnings('박열정', 10000, 52);

// 매개변수의 활용 ③
function earnings(name, wage=8590, hours=40) {
    console.log(`# ${name} 급여 정보`);
    console.log(`- 시급: ${wage}원`);
    console.log(`- 근무시간: ${hours}시간`);
    console.log(`- 급여: ${wage*hours}원`);
}

// 최저 임금으로 최대한 일하는 경우
earnings('김열정');

// 시급 1만원으로 최대한 일하는 경우
earnings('이열정', 10000);

// 시급 1만원으로 52시간 일하는 경우
earnings('박열정', 10000, 52);