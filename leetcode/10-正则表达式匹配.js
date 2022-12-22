/**
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

 
示例 1：

输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
示例 2:

输入：s = "aa", p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
示例 3：

输入：s = "ab", p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 

提示：

1 <= s.length <= 20
1 <= p.length <= 30
s 只包含从 a-z 的小写字母。
p 只包含从 a-z 的小写字母，以及字符 . 和 *。
保证每次出现字符 * 时，前面都匹配到有效的字符
 */

function checkSimilar(sItem, pItem, index, p) {
	if (pItem === '.') {
		return true
	}
	if (pItem === sItem) {
		return true
	}
	//
	if (pItem !== sItem && pItem !== '*') {
		return false
	}

	if (pItem !== sItem && pItem === '*') {
		if (index === 0) {
			return false
		} else {
			return checkSimilar(sItem, p[index - 1], index - 1, p)
		}
	}
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function (s, p) {
	let isSuccess = true

	function checkSimilar(sItem, pItem, index, p) {
		if (pItem === '.') {
			return true
		}
		if (pItem === sItem) {
			return true
		}
		if (pItem !== sItem && pItem !== '*') {
			return false
		}
		if (pItem !== sItem && pItem === '*') {
			if (index === 0) {
				return false
			} else {
				return checkSimilar(sItem, p[index - 1], index - 1, p)
			}
		}
	}

	function checkStep(s, p) {
		let pass = true
		for (let i = 0; i < s.length; i++) {
			const checkItemSimilar = checkSimilar(s[i], p[i], i, p)
			if (!checkItemSimilar) {
				pass = false
				break
			} else {
				if (i === s.length - 1 && p[i + 1]) {
					pass = false
					break
				}
			}
		}
		return pass
	}
	for (let i = 0; i < p.length; i++) {
		const step = checkStep(s, p.slice(i))
		if (step) {
			return true
		} else {
			isSuccess = false
		}
	}
	return isSuccess
}

// console.log(isMatch('aa', 'a')) // false
// console.log(isMatch('aa', 'a*')) // true
// console.log(isMatch('aa', 'a.')) // true
// console.log(isMatch('aa', '.*')) // true
console.log(isMatch('aa', 'aaa')) // false but now get true
// console.log(isMatch('aab', 'aaaac*a*b')) // true
// console.log(isMatch('ab', '.*ac')) // true

var isMatch = function (s, p) {
	let getIsMactch = (s, p) => {
		//判断，如果传入p的长度为0，那么，必须s的长度也为0才会返回true
		if (p.length === 0) {
			return !s.length
		}
		//判断第一个字符是否相等
		let match = false
		if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
			match = true
		}
		//p有模式的
		if (p.length > 1 && p[1] === '*') {
			//第一种情况：s*匹配0个字符
			//第二种情况：s*匹配1个字符，递归下去，用来表示s*匹配多个s*
			return getIsMactch(s, p.slice(2)) || (match && getIsMactch(s.slice(1), p))
		} else {
			return match && getIsMactch(s.slice(1), p.slice(1))
		}
	}
	return getIsMactch(s, p)
}
