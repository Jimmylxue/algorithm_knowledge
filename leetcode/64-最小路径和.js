/**

给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例 1：

输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12

 */

/**
 * 解题思路：
 *  这题是前两题的升级版本，因为机器人只能向下和向右进行走，所以这题仍然是使用动态规划解题时最快的
 *  到达一个点的值只只可能是 上面点的值+当前值  或  左边的点值+当前值
 *    我们取一个最小的值来取代当前的值即可，剩下的值就当填字游戏进行填即可。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	let row = grid.length
	let col = grid[0].length
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (i === 0) {
				grid[i][j] = (grid[i][j - 1] || 0) + grid[i][j]
			}
			if (j === 0) {
				grid[i][j] = (grid[i - 1] ? grid[i - 1][j] : 0) + grid[i][j]
			}
		}
	}

	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			grid[i][j] = Math.min(
				grid[i][j] + grid[i - 1][j],
				grid[i][j] + grid[i][j - 1]
			)
		}
	}
	return grid[row - 1][col - 1]
}

minPathSum([
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
])
