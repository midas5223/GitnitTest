/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let y = x.toString().split("").reverse().join("");
	if (x == y) return true;
	else return false; //내용 변경중//ㅇㅇㅇ//ㅇㄴㅇ/ㄴㅁ/ㅇㅁㄴ/ㅈㅁㄴ/ㅇㅈㅁㄴ/.ㅁㄴㅇ/.
};
