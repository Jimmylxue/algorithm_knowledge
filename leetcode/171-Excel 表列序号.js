/**

给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

示例 1:

输入: columnTitle = "A"
输出: 1
示例 2:

输入: columnTitle = "AB"
输出: 28
示例 3:

输入: columnTitle = "ZY"
输出: 701
 

提示：

1 <= columnTitle.length <= 7
columnTitle 仅由大写英文组成
columnTitle 在范围 ["A", "FXSHRXW"] 内

 */

/**
 *
 * 解题思路：
 *  这题是第 168题的 逆向解题思路，但是难度会比那题更低一点，也是使用进制转换的方法就可以快速解题了
 *
 *  先复习一下 二进制 => 十进制
 *    1011 => 1*2(0次方)+1*2(1次方)+0*2(2次方)+1*2(3次方) =>
 *
 *  现在转换为我们题目的 26 进制
 *    AZ => Z*26(0次方)+A*26(1次方)
 *       => 26*26(0次方) + 1*26(1次方)
 *       => 52
 *
 *  所以按照下面的解题思路就可快速解题了！ --- 又水了一题
 */

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
	const map = {
		A: 1,
		B: 2,
		C: 3,
		D: 4,
		E: 5,
		F: 6,
		G: 7,
		H: 8,
		I: 9,
		J: 10,
		K: 11,
		L: 12,
		M: 13,
		N: 14,
		O: 15,
		P: 16,
		Q: 17,
		R: 18,
		S: 19,
		T: 20,
		U: 21,
		V: 22,
		W: 23,
		X: 24,
		Y: 25,
		Z: 26,
	}
	let count = 0
	for (let i = columnTitle.length - 1, j = 0; i >= 0; i--, j++) {
		count += map[columnTitle[i]] * Math.pow(26, j)
	}
	return count
}

console.log(titleToNumber('AZ'))
console.log(titleToNumber('AB'))
