function callThreeTimes(callback) {
  	for(let i = 0; i <= 2; i++) {
      callback(i)
    }
}

function 내함수(i) {
  console.log(`${i}번째 함수입니다.`)
}

callThreeTimes(내함수)