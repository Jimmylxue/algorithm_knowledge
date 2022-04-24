/**

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

示例 1：

输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6

 */

/**
 * 解题思路：
 *  思路一：回溯递归的方式
 *    这个方式的解题思路和补全括号的题目的思路是一样的，所以只要使用回溯的方式进行解题，
 *    那套熟悉的代码写下来很快就能解题，但是这样的解题效率是比较慢的，不是最优解
 *
 *  思路二：动态规划
 *    之前处理的动态规划都是使用一维数组的，这回这个比较特殊是一个二维数组，
 *    其特点是 除了边界的点的走法都等于上面的路程+左边的路程，所以可以根据这个进行操作
 *    最后输出指定点的值即可。
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function (m, n) {
	let startX = 0,
		startY = 0
	let endX = m - 1,
		endY = n - 1
	let res = 0
	const diff = (startX, startY) => {
		if (startX === endX && startY === endY) {
			res++
		}
		if (startY < endY) {
			diff(startX, startY + 1)
		}
		if (startX < endX) {
			diff(startX + 1, startY)
		}
	}
	diff(startX, startY)
	return res
}

var uniquePaths = function (m, n) {
	const f = new Array(m).fill(1).map(() => new Array(n).fill(1))
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			f[i][j] = f[i - 1][j] + f[i][j - 1]
		}
	}
	return f[m - 1][n - 1]
}

console.log(uniquePaths(3, 7))
