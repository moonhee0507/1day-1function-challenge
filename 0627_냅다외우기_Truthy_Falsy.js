// 0, -0, {}, null, 1, -1, '0', NaN, 'false', undefined, [], ''를 Truthy와 Falsy로 분류해보세요.

// Truthy: {}, 1, -1, '0', 'falsy', []         - O

// Falsy : 0, -0, null,  NaN, undefined, ''

const check = '';

if (check) {
  console.log('Truthy면 보입니다!')
}