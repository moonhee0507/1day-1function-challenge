// 카리나 있나요??

let 출석부 = ['윈터', '카리나', '지젤', '닝닝'];

function isName(name) {
  for (let i = 0; i < 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log(`${출석부[i]} 있어요!`)
      return
    }
  }
}

isName('카리나')