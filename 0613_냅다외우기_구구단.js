// 구구단! 몇단?

function gogodan(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

gogodan(2);


function gugudan() {
  for (let k = 2; k <= 9; k++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${k} x ${j} = ${k * j}`);
    }
  }
}

gugudan()