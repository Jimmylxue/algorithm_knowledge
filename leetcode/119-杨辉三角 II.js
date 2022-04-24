/**

给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 

示例 1:

输入: rowIndex = 3
输出: [1,3,3,1]
示例 2:

输入: rowIndex = 0
输出: [1]
示例 3:

输入: rowIndex = 1
输出: [1,1]
 

提示:

0 <= rowIndex <= 33

 */

/**
 * 和上题一样的解题思路
 *  0，0）
 *             （1，0）（1，1）
 *          （2，0）（2，1）（2，2）
 *       （3，0）（3，1）（3，2）（3，3）
 *
 * 用 （i，j）来表示坐标
 *  我们会发现 j=0 的点 值一定是为 1  i===j 的点 对应的值一定为1
 *      其他情况下 arr[i][j] = arr[i-1][j-1]+arr[i-1][j]
 *      根据这个公式 就可以完美的解出来这一题的答案了
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }
  return arr[rowIndex];
};

console.log(getRow(3));
