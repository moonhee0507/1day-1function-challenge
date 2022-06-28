//1. make a string out of an array
const fruits = ['apple', 'banana', 'orange'];
const result1 = fruits.join('|');
console.log(result1);
// => join(): 배열을 어떤 방식으로 문자열화 해준다.

//2. make an array out of a string
const fruitsString = '🍎,🍏,🍊,🍓';
const result2 = fruitsString.split(',');
console.log(result2);
// => split(): 문자열을 어떤 방식으로 배열화 해준다.

//3. make this array look like this: [5,4,3,2,1]
const 원래배열 = [1, 2, 3, 4, 5];
const result3 = 원래배열.reverse();
console.log(result3);

// check!
console.log(원래배열);
// => reverse(): 역배열. 원본배열도 바뀐상태로 저장된다.

//4. make new array without the first two elements
const arraySplice = [1, 2, 3, 4, 5];
const result4 = arraySplice.splice(2, 5);
console.log(result4);
// check!
console.log(arraySplice);
// => splice(): 배열을 잘라오고 원본배열에 변동.

const arraySlice = [1, 2, 3, 4, 5];
const result4_4 = arraySlice.slice(2, 5);
console.log(result4_4);
// check!
console.log(arraySlice);
// => slice(): 배열을 자른다. 원본배열에는 변동이 없다.