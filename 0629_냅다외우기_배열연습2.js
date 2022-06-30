// 배열함수 2탄
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

// 01. find a student with the score 90
const result = students.find((student) => {
  return student.score === 90;
});
console.log(result);
// => find(): 가장 먼저 조건에 맞는 '요소' 하나만 찾고 즉시 함수를 종료한다.

// 02. make an array of enrolled studends
const enrolled = students.filter((student) => {
  return student.enrolled === true;
});
console.log(enrolled);
// => filter(): 테스트를 통과하는 모든 '요소'를 모아 새로운 배열로 반환한다.

// 03. make an array containing only the students' scores result sould be : [45, 80, 90, 66, 88]
const score = students.map((student) => {
  return student.score;
});
console.log(score);
// => map(): 키에 해당하는 '값'만 찾아서 배열로 만들어준다.

// 04. check if there is a student with the score lower than 50
const lower50 = students.some((student) => {
  console.log(student.score);
  return student.score < 50;
});
console.log(lower50);
// => some():배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트(불리언)