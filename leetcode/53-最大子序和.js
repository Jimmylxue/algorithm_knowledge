/**
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0
示例 4：

输入：nums = [-1]
输出：-1
示例 5：

输入：nums = [-100000]
输出：-100000
 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104

*/

/**
 * 解题思路：
 *  在我刚拿到这题的时候，我也没有多想，直接一个暴力二层循环就套进去了，不出所料解题解的很快，很久就写完了，
 *    但是在leetcode里面卡了很久 leetcode 给了的一些测试用例有的数组非常之长，以至于计算时间超级久，这个是不对的
 *
 *  无奈下我看了 leetcode 的大神解题，只用了 一层循环就解决了这个问题！！！精妙之绝
 *    关键在于 如果两个负数相加 得到的是一个更大的负数 与我们要的就相反了 干脆直接赋值这个负数 表示从这个负数开始计算
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  if (nums.length > Math.pow(10, 5)) return;
  if (nums.length === 1) return nums[0];
  let max = Math.max(...nums),
    length = nums.length;
  for (let i = 0; i < length; i++) {
    let temp = nums[i];
    for (let j = i + 1; j < length; j++) {
      temp += nums[j];
      max < temp ? (max = temp) : '';
    }
  }
  return max;
};

var maxSubArray2 = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      // 如果两个负数相加 得到的是一个更大的负数 与我们要的就相反了 干脆直接赋值这个负数 表示从这个负数开始计算
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray2([-2, 1]));
