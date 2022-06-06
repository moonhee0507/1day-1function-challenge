// 소수이면 Yes, 아니면 No로 출력하세요
// 소수: 1과 자기자신으로만 나눠지는 수

function 소수판별(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log('No');
      return false;
    }
  }
  
  if (n === 1) {
    console.log('No');
    return false;
  }
  
  console.log('Yes');
  
}

소수판별(1)
소수판별(10)
소수판별(5)