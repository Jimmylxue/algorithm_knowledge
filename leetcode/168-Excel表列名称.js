/**
 * 
  给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

  例如：

  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28 
  ...
   

  示例 1：

  输入：columnNumber = 1
  输出："A"
  示例 2：

  输入：columnNumber = 28
  输出："AB"
  示例 3：

  输入：columnNumber = 701
  输出："ZY"
  示例 4：

  输入：columnNumber = 2147483647
  输出："FXSHRXW"
   

  提示：

  1 <= columnNumber <= 231 - 1

 */

/**
 * 解题思路：
 *  这题采用的是递归的解题思路，本质上这题涉及的是进制转换问题，由我们所熟知的
 *    10进制 => 26进制
 *  所以我们可以类比我们熟知的 除二取余法 => 这里自然而然的编程 除 26取余法
 *
 *  几个比较关键的边缘条件 还有要注意的是这里数字是从 1 开始 而不是我们所熟知的 10进制 从0开始
 *
 *  采用递归的方式就可以比较方便快速的解题了，方式就是不断的除以 26取余，余数作为index 取对应的映射中取值
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
	const map = {
		1: 'A',
		2: 'B',
		3: 'C',
		4: 'D',
		5: 'E',
		6: 'F',
		7: 'G',
		8: 'H',
		9: 'I',
		10: 'J',
		11: 'K',
		12: 'L',
		13: 'M',
		14: 'N',
		15: 'O',
		16: 'P',
		17: 'Q',
		18: 'R',
		19: 'S',
		20: 'T',
		21: 'U',
		22: 'V',
		23: 'W',
		24: 'X',
		25: 'Y',
		26: 'Z',
	}
	let str = ''
	const diff = num => {
		if (num <= 26) {
			str += map[num]
			return
		}
		let radix = num % 26 === 0 ? Math.floor(num / 26) - 1 : Math.floor(num / 26)
		if (radix > 26) {
			diff(radix)
		} else {
			str += map[radix]
		}
		diff(num - radix * 26)
	}
	diff(columnNumber)
	return str
}

console.log(convertToTitle(52))
console.log(convertToTitle(26))
console.log(convertToTitle(28))
console.log(convertToTitle(701))
console.log(convertToTitle(2147483647))
