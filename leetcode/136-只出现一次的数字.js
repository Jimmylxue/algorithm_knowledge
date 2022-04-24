/**

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

*/

/**
 * 解法1 比较笼统了  效率也相对比较低  没有什么算法的概念
 *  但是能够解出来
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//   // 解法1
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) {
//       obj[nums[i]] = 1;
//     } else {
//       obj[nums[i]]++;
//     }
//   }
//   let index = Object.values(obj).indexOf(1);
//   return index !== -1 ? Number(Object.keys(obj)[index]) : 0;
// };

var singleNumber = function (nums) {
  // 解法1
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  let index = Object.values(obj).indexOf(1);
  return index !== -1 ? Number(Object.keys(obj)[index]) : 0;
};
console.log(singleNumber([2, 2, 1]));
