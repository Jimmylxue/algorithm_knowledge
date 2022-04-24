/**

给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
示例 2：


输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

提示：

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000

 */

/**
 * 解题思路：
 *  这题我首先想到的是暴力破解法，只需要记录一下坐标，就能够非常快速的方式进行解题了
 *  但是题目是有要求的  要求我们只能原地的修改数组，所以暴力破解法在这里不能使用
 *  将每个点都使用坐标进行表示，我们会发现 旋转90度其实是内部的坐标一些变化。如：
 *  (0,0) => (2,0)
 *  (2,0) => (2,2)
 *  (2,2) => (0,2)
 *  (0,2) => (0,0)
 *  涉及到的不是两两交换，而是四个元素之间的互相交换
 *  所以真的难的是我们要判断哪四个点之间要交换，最后执行一次交换  就能进行解题了。 也推荐大家看下leetcode官方解题。
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function (matrix) {
//   let res = [];
//   for (let i = 0; i < matrix.length; i++) {
//     let temp = [];
//     for (let j = matrix.length - 1; j >= 0; j--) {
//       temp.push(matrix[j][i]);
//     }
//     res.push(temp);
//   }
//   matrix = res;
//   console.log(res);
// };
var rotate = function (matrix) {
  let n = matrix.length;
  let temp;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - 1 - i; j++) {
      // 这里是四个点进行互相交换
      temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
  console.log(matrix);
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
