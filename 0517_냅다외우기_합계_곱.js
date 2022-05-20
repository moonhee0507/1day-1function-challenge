function 다더해라(a, b) {
    let output = 0;
    for (let i = a; i <= b; i++) {
        output += i;
    }
    return output;
}

console.log(`1부터 10까지의 합은 ${다더해라(1, 10)}입니다.`);
console.log(`6부터 20까지의 합은 ${다더해라(6, 20)}입니다.`);



function 다곱해라(a, b) {
    let result = 1;
    for (let i = a; i <= b; i++) {
        result *= i;
    }
    return result;
}

console.log(`1부터 10까지의 곱은 ${다곱해라(1, 10)}입니다.`);
console.log(`6부터 20까지의 곱은 ${다곱해라(6, 20)}입니다.`);
