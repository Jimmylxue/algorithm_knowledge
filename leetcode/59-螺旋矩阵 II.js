/**

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

示例 1：

输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
示例 2：

输入：n = 1
输出：[[1]]

 */

/**
 * 解题思路：
 *  这题是第54题相反过来的题。等于是告诉了我们螺旋输出的结果，需要让我们计算出原来的矩阵
 *  思路和那一题是一样的，首先我们得先根据n 初始化一个空的矩阵，并记录每个矩阵的坐标
 *  当我们每次
 *    右走 每次 i+0 j+1
 *    向下 每次 i+1 j+0
 *    向左 每次 i-1 j+0
 *    向上 每次 i+0 j-1
 *  然后我们要做的是 顺时针是 不断 执行 右=>下=>左=>上 的过程 并把每次踩到的点都存入新的数组中
 *  当 走到边界时 换个位置 边界：
 *    - 当i 或者 j小于0 （左边界）
 *    - 当i 或者 j等于边界时 （有边界）
 *    - 当i和j都访问到踩过的点时 换方向
 *  每到一点时，将这个点存为上一次+1的值，初始值为1
 *  最后再将原来的数组返回即可
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let count = 1
	let arr = []
	for (let i = 0; i < n; i++) {
		arr.push([])
		for (let j = 0; j < n; j++) {
			arr[i][j] = 'xx'
		}
	}
	let rowCount = n,
		colCount = n
	const position = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	]
	let directive = 0

	let row = 0,
		col = -1
	let res = []
	while (res.length < rowCount * colCount) {
		const nextRow = row + position[directive][0]
		const nextCol = col + position[directive][1]
		if (
			nextRow < 0 ||
			nextRow === rowCount ||
			nextCol < 0 ||
			nextCol === colCount ||
			arr[nextRow][nextCol] !== 'xx'
		) {
			directive = (directive + 1) % position.length
			continue
		}
		res.push(arr[nextRow][nextCol])
		arr[nextRow][nextCol] = count++
		row = nextRow
		col = nextCol
	}
	return arr
}

generateMatrix(3)
