/*
  
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

var letterCombinations = function (digits) {
	let arr = [
		['_'],
		['!', '@', '*'],
		['a', 'b', 'c'],
		['d', 'e', 'f'],
		['g', 'h', 'i'],
		['j', 'k', 'l'],
		['m', 'n', 'o'],
		['p', 'q', 'r', 's'],
		['t', 'u', 'v'],
		['w', 'x', 'y', 'z'],
	]
	let count = digits.length
	let brr = []
	for (let i = 0; i < digits.length; i++) {
		brr = [...brr, ...arr[digits[i]]]
	}
	let start = brr[0]
	let crr = []
	for (let c = 1; c <= count; c++) {}
	for (let i = 0; i < brr.length; i++) {
		for (let j = i + 1; j < brr.length; j++) {
			isSame()
			if (brr[j]) crr.push(brr[i] + brr[j])
		}
	}
	console.log(crr)
	return crr
}

function isSame() {}
