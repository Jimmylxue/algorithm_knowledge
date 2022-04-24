/**

实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，组合出下一个更大的整数）。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须 原地 修改，只允许使用额外常数空间。

 

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]
示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]
示例 4：

输入：nums = [1]
输出：[1]
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 100

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 先获取数组长度
  let length = nums.length;
  // 从右往左 开始比较
  for (let i = length - 1; i >= 0; i--) {
    if (i === 0) {
      // 如果比到头都没有符合 说明没有更大的数 直接返回一个最小的数
      return nums.sort((a, b) => a - b);
    }
    if (nums[i] > nums[i - 1]) {
      // 发现一个 前面的数比当前位置的数大的情况

      // 先将当前数以及以后的数组 进行一次排序  最好的一个例子 [2,3,1]
      sortDz(nums, i, length); // [2,1,3]
      for (let j = i; j < length; j++) {
        // 从排序之后的位置开始往后找
        if (nums[j] > nums[i - 1]) {
          // 如果如果一个个找的数大于前面比较的数 则直接替换 先是 1和2 比较 然后是 3和2比较  替换3和2
          let temp = nums[i - 1];
          nums[i - 1] = nums[j];
          nums[j] = temp;
          return nums;
        }
      }
    }
  }
};

// 利用冒泡排序 -- 实现数组指定排序方法
function sortDz(nums, star, end) {
  let temp = null;
  for (let i = star; i <= end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (nums[i] > nums[j]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
}

console.log(nextPermutation([1, 3, 2]));
