/**

给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

 */

/**
 * 解题思路：
 *  这题的思路是我们需要将每个点的坐标给记下来，然后记住每个点走动的位置的大小，用(i,j)记录当前的点
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
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let rowCount = matrix.length
	let colCount = matrix[0].length
	const position = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	]
	let directive = 0

	let res = []
	let row = 0,
		col = -1
	while (res.length < rowCount * colCount) {
		const nextRow = row + position[directive][0]
		const nextCol = col + position[directive][1]
		// console.log(nextRow, nextCol)
		if (
			nextRow < 0 ||
			nextRow === rowCount ||
			nextCol < 0 ||
			nextCol === colCount ||
			matrix[nextRow][nextCol] === ''
		) {
			directive = (directive + 1) % position.length
			continue
		}
		res.push(matrix[nextRow][nextCol])
		matrix[nextRow][nextCol] = ''
		row = nextRow
		col = nextCol
	}
	console.log(res)
	return res
}

spiralOrder([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
])
