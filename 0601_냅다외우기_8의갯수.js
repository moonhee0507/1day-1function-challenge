// 1부터 100까지 8이 몇개일까요??

(Array(100).fill(1).map((index, value) => index + value) + '').split('8').length - 1