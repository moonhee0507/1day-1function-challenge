// 요일 확인 함수
// 월 a, 일 b를 입력받아 무슨 요일인지 리턴

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function checkDay(a, b) {
  let theDay = new Date(`2022-${a}-${b}`);
  
  console.log(day[theDay.getDay()]);
}

checkDay(6, 10);