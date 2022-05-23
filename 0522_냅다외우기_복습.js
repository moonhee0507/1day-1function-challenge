// 윤년구하기 ①

// var year = 2020;
// var month = 2;
// var days = 0;

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = 31;
//         break;

//     case 4: case 6: case 9: case 11:
//         days = 30;
//         break

//     case 2:
//         days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
//         break;

//     default: console.log('Invalid month');
// }

// console.log(days)


// 윤년구하기 ②

// var year = 2020;
// var month = 2;
// var days = 0;

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = 31;
//         break;

//     case 4: case 6: case 9: case 11:
//         days = 30;
//         break;

//     case 2:
//         days = ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0)) ? 29 : 28;
//         break;

//     default: console.log('Invalid month');
// }

// console.log(days);


// 윤년구하기 ③

// var year = 2020;
// var month = 2;
// var days = 0;

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = 31;
//         break;

//     case 4: case 6: case 9: case 11:
//         days = 30;
//         break;

//     case 2:
//         days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 ===0)) ? 29 : 28;
//         break;

//     default: console.log('Invalid month');
// }

// console.log(days);




// a ~ b 합셈과 곱셈 ①

// function 다더해라(a, b) {
//     let output = 0;
//     for (let i = a; i <= b; i++) {
//         output += i;
//     }
//     return output;
// }

// console.log(`1부터 10까지의 합은 ${다더해라(1, 10)}입니다.`);


// function 다곱해라(a, b) {
//     let result = 1;
//     for (let i = a; i <= b; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(`1부터 10까지의 곱은 ${다곱해라(1, 10)}입니다.`);


// a ~ b 합셈과 곱셈 ②

// function 다더해라(a, b) {
//     let output = 0;
//     for (let i = a; i <= b; i++) {
//         output += i
//     }
//     return output;
// }

// console.log(`1부터 10까지의 합은 ${다더해라(1, 10)}입니다.`);

// function 다곱해라(a, b) {
//     let result = 1;
//     for (let i = a; i <= b; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(`1부터 10까지의 곱은 ${다곱해라(1, 10)}입니다.`);


// a ~ b 합셈과 곱셈 ③

// function 다더해라(a, b) {
//     let output = 0;
//     for (let i = a; i <= b; i++) {
//         output += i;
//     }
//     return output;
// }

// console.log(`1부터 10까지의 합은 ${다더해라(1, 10)}입니다.`);

// function 다곱해라(a, b) {
//     let result = 1;
//     for (let i = a; i <= b; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(`1부터 10까지의 곱은 ${다곱해라(1, 10)}입니다.`);



// 투두리스트 ①

// class Todo {
//     constructor(내용, 상태) {
//         this.내용 = 내용;
//         this.상태 = 상태;
//     }

//     changeState() {
//         this.상태 = !this.상태;
//     }
// }

// class TodoManager {
//     constructor() {
//         this.todoList = [];
//     }

//     addItem(내용, 상태 = false) {
//         this.todoList.push(new Todo(내용, 상태));
//     }

//     getItems() {
//         return this.todoList;
//     }

//     getLeftTodoCount() {
//         return this.todoList.reduce((total, current) => {
//             if (current.상태 === false) {
//                 return ++total;
//             } else {
//                 return total;
//             }
//         }, 0);
//     }
// }

// const todoManager = new TodoManager();

// 투두리스트 ②

// class Todo {
//     constructor(내용, 상태) {
//         this.내용 = 내용;
//         this.상태 = 상태;
//     }

//     changeState() {
//         this.상태 = !this.상태;
//     }
// }

// class TodoManager {
//     constructor() {
//         this.todoList = [];
//     }

//     addItem(내용, 상태 = false) {
//         this.todoList.push(new Todo(내용, 상태));
//     }

//     getItems() {
//         return this.todoList;
//     }

//     getLeftTodoCount() {
//         return this.todoList.reduce((total, current) => {
//             if (current.상태 === false) {
//                 return ++total;
//             } else {
//                 return total;
//             }
//         }, 0);
//     }
// }

// const todoManager = new TodoManager();


// 투두리스트 ③

// class Todo {
//     constructor(내용, 상태) {
//         this.내용 = 내용;
//         this.상태 = 상태;
//     }

//     changeState() {
//         this.상태 = !this.상태;
//     }
// }

// class TodoManager {
//     constructor() {
//         this.todoList = [];
//     }

//     addItem(내용, 상태 = false) {
//         this.todoList.push(new Todo(내용, 상태));
//     }

//     getItems() {
//         return this.todoList;
//     }

//     getLeftTodoCount() {
//         return this.todoList.reduce((total, current) => {
//             if (current.상태 === false) {
//                 return ++total;
//             } else {
//                 return total;
//             }
//         }, 0);
//     }
// }

// const todoManager = new TodoManager();


// 최솟값 ①

// function min(array) {
//     let output = array[0];

//     for (const item of array) {
//         if (output > item) {
//             output = item;
//         }
//     }

//     return output;
// }

// const testArray = [5, 3, 1, 2, 4];
// console.log(`${testArray} 중에서 최솟값은 ${min(testArray)} 입니다.`);


// 최솟값 ②

// function min(array) {
//     let output = array[0];

//     for (const item of array) {
//         if (output > item) {
//             output = item;
//         }
//     }

//     return output;
// }

// const testArray = [5, 3, 1, 2, 4];
// console.log(`${testArray} 중에서 최솟값은 ${min(testArray)} 입니다.`);


// 최솟값 ③

// function min(array) {
//     let output = array[0];

//     for (const item of array) {
//         if (output > item) {
//             output = item;
//         }
//     }

//     return output;
// }

// const testArray = [5, 3, 1, 2, 4];
// console.log(`${testArray} 중에서 최솟값은 ${min(testArray)} 입니다.`);


// 가격순 ①

let products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 32000, title: 'Check Shirt' },
    { id: 2, price: 15000, title: 'Black Tie' },
    { id: 3, price: 67000, title: 'Springfield Shirt' },
    { id: 4, price: 82000, title: 'Red Mini Dress' },
];

let 낮은가격순 = function() {
    products.sort(function(a, b) {
        return a.price - b.price;
    });

    console.log(products);
};

낮은가격순();

let 높은가격순 = function() {
    products.sort(function(a, b) {
        return b.price - a.price;
    });

    console.log(products);
};

높은가격순();


// 가격순 ②

// let 낮은가격순 = function() {
//     products.sort(function(a, b) {
//         return a.price - b.price;
//     })

//     console.log(products);
// };

// 낮은가격순();

// let 높은가격순 = function() {
//     products.sort(function(a, b) {
//         return b.price - a.price;
//     });

//     console.log(products);
// };

// 높은가격순();


// 가격순 ③

// let 낮은가격순 = function() {
//     products.sort(function(a, b) {
//         return a.price - b.price;
//     });

//     console.log(products);
// };

// 낮은가격순();

// let 높은가격순 = function() {
//     products.sort(function(a, b) {
//         return b.price - a.price;
//     });

//     console.log(products);
// };

// 높은가격순();