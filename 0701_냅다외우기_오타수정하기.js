const word = prompt('내용을 입력해주세요.');
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}
console.log(replaceAll(word, 'q', 'e'));