/**

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

提示：

1 <= nums.length <= 8
-10 <= nums[i] <= 10

 */

/**
 * 解题思路
 *  这题的解题思路和上一题是 全排列 是一样的，区别在于多了几个条件
 *    - 数组内容可能会有重复的数字
 *  所以整体的逻辑和上一题基本保持一致，使用回溯的套路即可快速解题。
 *  因为数组的成员可能会重复，所以和上一题相比会多几步操作：
 *    - 先将整个数组进行一次排序
 *    - 我们我们分别创建两个数组 一个空数组 一个存放nums
 *    - 每次递归都往第一个数组中存放一个nums中的一个值  nums就减去一个值
 *      - 如果nums中取的值和前一个取的值一样，则直接跳过 取下一个值
 *    - 递归不断执行上面那个过程的
 *    - 当nums为空时 说明已经全部添加完成了 这时候将这个结果存入 结果数组中
 *    - 最后将这个结果数组进行返回即可。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length === 1) {
    return [nums];
  }
  nums.sort((a, b) => a - b);
  let res = [];
  let temp = null;
  const diff = (path, params) => {
    if (params.length === 0) {
      res.push(path);
      return;
    }
    for (let i = 0; i < params.length; i++) {
      if (params[i] === params[i - 1]) {
        continue;
      } else {
        temp = params[i];
        params.splice(i, 1);
        diff([...path, temp], params);
        params.splice(i, 0, temp);
      }
    }
  };

  diff([], nums);
};

permuteUnique([1, 1, 2]);
