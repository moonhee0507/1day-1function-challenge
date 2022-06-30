// 배열함수 3탄(2탄 변수 재사용합니다)
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
// ------------------------------------> 여기서 부터
// 01. compute student's average score
const 점수의합계 = students.reduce((prev, curr) => {
	// console.log('---');
  // console.log(prev);
  // console.log(curr); // 아 이래서 .score를 해주는구나!
  return prev + curr.score;
}, 0)
console.log('평균', 점수의합계 / students.length);
// => reduce(): 배열의 각 요소에 대해 주어진 함수를 실행하고 하나의 결과값을 반환한다. (ex. 요소(or 값)를 다 더해버린다 등)

// 02. make a string containin all the scores
// result should be: '45, 80, 90, 66, 88'
const 문자화 = students.map((student) => student.score).join();
console.log('문자화', 문자화);
// map으로 key에 해당하는 값을 찾아 배열로 만들고 join으로 문자열화한다.

// 03. 위 문제에서 string을 만들긴 만드는데 점수가 50점 이상인 애들로만 만들어보세요.
const 몇점이상50 = students.map((student) => student.score).filter((score) => score >= 50).join();
console.log('몇점이상50', 몇점이상50);
// => map으로 key에 해당하는 값을 찾아 배열로 만들어주고, filter로 테스트를 통과하는 모든 요소를 배열로 반환

// 04. do Q02. sorted in asending order and make it a string
// result should be: '45, 66, 80, 88, 90'
const 오름차순 = students.map((student) => student.score).sort((a, b) => {return a - b;}).join();
console.log('오름차순', 오름차순);
// sort(): 배열의 요소를 어떤 방식으로 정렬하고 그것을 반환해준다.
// map으로 key에 해당하는 값을 찾아 배열로 만들어 주고, sort로 오름차순으로 정렬한 후, join으로 문자열화 해준다.