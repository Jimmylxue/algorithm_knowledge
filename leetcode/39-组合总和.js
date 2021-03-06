/**

给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。

 

示例 1：

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
示例 2：

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
示例 3：

输入: candidates = [2], target = 1
输出: []
示例 4：

输入: candidates = [1], target = 1
输出: [[1]]
示例 5：

输入: candidates = [1], target = 2
输出: [[1,1]]

 */

/**
 * 这个也是回溯的基本题，回溯的题目都是基本递归的一个套路
 *  需要记住回溯问题的套路 ， 不断递归，到符合条件的适合退出，且记住在递归的过程中会去掉不符合条件的情况
 *  也就是 “回溯会减支” 这个过程
 *
 * 本题逻辑，目标值是target  我们应该是target 不断的减去数组的每一项， 直到target这个值为 0 的情况 则代表的是已经结束的情况
 *  减去每个值时 剩余的值就变成新的target
 *  当用剩余值再继续执行和剩余数组每个值进行相加，并将减去的值存放进入临时数组
 *    一旦target等于0时， 说明符合情况 将这个数组存入到这个结果中
 *    一旦target<要相加的项时 说明不符合继续回溯的情况了，进行 “减支”
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let temp = [];
  candidates.sort((a, b) => a - b);
  handleBack(candidates, 0, target);
  function handleBack(arr, start, target) {
    if (target === 0) {
      res.push([...temp]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      if (arr[i] > target) break;
      temp.push(arr[i]); // 添加一个值
      handleBack(arr, i, target - arr[i]); // 将添加一个值的情况进入回溯递归
      temp.pop(); // 再去掉这个值 因为这个数组 后面还要加入其他的值  这个非常的关键！！！
    }
  }
  return res;
};

combinationSum([2, 3, 6, 7], 7);
