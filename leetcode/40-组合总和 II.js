/**

给你一个由候选元素组成的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个元素在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 

示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]

 */

/**
 * 这题和第39题是一样的，都是可以通过回溯的形式进行解题，不断的递归
 *  这题和上一题相比，多的条件是
 *    - 每个值不能出现重复使用的情况
 *    - 数组的元素会出现重复
 *
 * 本题逻辑，目标值是target  我们应该是target 不断的减去数组的每一项， 直到target这个值为 0 的情况 则代表的是已经结束的情况
 *  减去每个值时 剩余的值就变成新的target
 *  当用剩余值再继续执行和剩余数组每个值进行相加，并将减去的值存放进入临时数组
 *    当前要减的值和前一个值相同的时候，就不需要继续做的直接下一个（这个是因为相同的值重复了）
 *
 *    一旦target等于0时， 说明符合情况 将这个数组存入到这个结果中
 *    一旦target<要相加的项时 说明不符合继续回溯的情况了，进行 “减支”
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
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
      if (i > start && arr[i] === arr[i - 1]) {
        // 当前要减的值和上一个值相同时，不需要处理
        continue;
      } else {
        temp.push(arr[i]);
        handleBack(arr, i + 1, target - arr[i]);
        temp.pop();
      }
    }
  }
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
