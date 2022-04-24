/**

46. 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]

 */

/**
 * 本题是一个全排列题目，这题其实和匹配括号是有点像的，可以使用回溯的方式来进行解决
 *  我们我们分别创建两个数组 一个空数组 一个存放nums
 *  每次递归都往第一个数组中存放一个nums中的一个值  nums就减去一个值  之后再次进入递归
 *  递归不断执行上面那个过程的
 *  当nums为空时 说明已经全部添加完成了 这时候将这个结果存入 结果数组中
 *  最后将这个结果数组进行返回即可。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) {
    return [nums];
  }
  let res = [];
  const diff = (path, parameter) => {
    if (parameter.length === 0) {
      res.push(path);
      return;
    }
    for (let i = 0; i < parameter.length; i++) {
      let item = parameter[i];
      parameter.splice(i, 1);
      diff([...path, item], parameter);
      parameter.splice(i, 0, item);
    }
  };
  diff([], nums);
};

permute([1, 2, 3]);
