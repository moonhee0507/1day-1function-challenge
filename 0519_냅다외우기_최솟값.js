function min(array) {
    let output = array[0];

    for (const item of array) {
        if (output > item) {
            output = item;
        }
    }

    return output;
}

const testArray = [5, 3, 1, 2, 4];
console.log(`${testArray} 중에서 최솟값은 ${min(testArray)} 입니다.`);

// 커밋 메시지 컨벤션 적용
