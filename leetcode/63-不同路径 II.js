/**

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

示例 1：

输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
示例 2：

输入：obstacleGrid = [[0,1],[0,0]]
输出：1

 */

/**
 * 解题思路：
 *  这题是62不同路径的升级版本，添加了障碍物的元素，更难了一点，但是任然可以使用动态规划进行解题
 *    和上一题一个道理，因为机器人只能向右或者向下走，所以它到达一个点的走法等于左边格子走法+上面格子的走法
 *    其次如果障碍物在左边，那它到达这个点的走法只等于到达上边的走法
 *    如果障碍物在目标点的上边，那它到达这个点的走法只等于到达左边的走法
 *    以此可以列一个二维数组使用动态规划的方式进行求解
 *
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	let row = obstacleGrid.length
	let col = obstacleGrid[0].length
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (obstacleGrid[i][j] === 1) {
				obstacleGrid[i][j] = -1
			}
		}
	}
	let xFlag = false
	let yFlag = false
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (i === 0) {
				if (obstacleGrid[i][j] !== -1 && !xFlag) {
					obstacleGrid[i][j] = 1
				} else {
					xFlag = true
				}
			}
			if (j === 0) {
				if (obstacleGrid[i][j] !== -1 && !yFlag) {
					obstacleGrid[i][j] = 1
				} else {
					yFlag = true
				}
			}
		}
	}
	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			if (obstacleGrid[i][j] === -1) {
				continue
			} else if (obstacleGrid[i - 1][j] === -1) {
				obstacleGrid[i][j] = obstacleGrid[i][j - 1]
			} else if (obstacleGrid[i][j - 1] === -1) {
				obstacleGrid[i][j] = obstacleGrid[i - 1][j]
			} else {
				obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
			}
		}
	}
	return obstacleGrid[row - 1][col - 1] === -1
		? 0
		: obstacleGrid[row - 1][col - 1]
}

// uniquePathsWithObstacles([
// 	[0, 0, 0],
// 	[0, 1, 0],
// 	[0, 0, 0],
// ])
// uniquePathsWithObstacles([
// 	[0, 1],
// 	[0, 0],
// ])
// uniquePathsWithObstacles([
// 	[0, 0],
// 	[0, 1],
// ])
// uniquePathsWithObstacles([[1]])
// uniquePathsWithObstacles([[1, 0]])
uniquePathsWithObstacles([
	[0, 0],
	[1, 1],
	[0, 0],
])
