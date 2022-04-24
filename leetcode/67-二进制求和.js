/**

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

 */

/**
 * 这是一道难度为简单的题，我们之前做了十进制的加减，所以做这个二进制的简直就简单的不行了
 *    我们需要知道的是，二进制相加时的进位 最多为 1
 *    我们可以将整个整个字符串进行一次倒序，倒着计算，这样操作之后的结果我们再统一再进行一次反转
 *    因为涉及到数组解题，这样操作添加的删除元素都在数组末尾，性能更高！
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	let lengthdep = a.length - b.length
	if (lengthdep > 0) {
		b = '0'.repeat(lengthdep) + b
	} else if (lengthdep < 0) {
		a = '0'.repeat(Math.abs(lengthdep)) + a
	}
	a = [...a].reverse()
	b = [...b].reverse()
	let sum = []
	let add = 0
	for (let i = 0; i < a.length; i++) {
		let temp = Number(a[i]) + Number(b[i]) + add
		if (temp > 1) {
			sum[i] = temp % 2
			add = 1
		} else {
			sum[i] = temp
			add = 0
		}
	}
	if (add) {
		sum.push(add)
	}
	return sum.reverse().join('')
}

// addBinary('11', '1')
addBinary('1010', '1011')
