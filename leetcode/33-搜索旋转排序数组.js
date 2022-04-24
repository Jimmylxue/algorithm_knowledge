/**

33. 搜索旋转排序数组
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

 

示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1

 */

/**
 * 解题思路：
 *  因为整个数组最对会被分成两个相对升序的数组，
 *  因为数组是升序的，所以我们在查找值时其实是有方法，在满足条件情况下就不用继续遍历了
 *  所以总体上就是我们要规避掉不需要的操作
 *
 *  我们需要比对 目标值 和 遍历中的每个值的大小情况
 *      当相等时，直接输出这个索引
 *      当大小情况出现：小=>大=>小 的情况 不需要遍历 直接返回-1
 *      当大小情况出现：大=>小 的情况  不需要遍历 直接返回-1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // return nums.indexOf(target)
  /**
        type : 1 target与每一项比先小
        type : 2 target与每一项比先大
     */
  let type = 0;
  let flag = 0; // 用于判断是否是先小到最大
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 && nums[i] !== target) {
      return -1;
    }
    if (nums[i] === target) {
      return i;
    }
    if (target < nums[i]) {
      // 目标值小于遍历值
      if (type === 0) {
        type = 1; // 第一次赋值 先小
      } else if (type === 2) {
        return -1; // 先大再小 说明不存在 直接退出-1
      } else if (type === 1) {
        // 小到大
        if (flag === 1) {
          // 场景： 先小再到大再到小
          return -1;
        }
      }
    }
    if (target > nums[i]) {
      // 目标值大于于遍历值
      if (type === 0) {
        type = 2; // 第一次赋值 最开始是大
      } else if (type === 1) {
        // 小到大
        type = 2;
        flag = 1;
      } else if (type === 2) {
        // 一直大 无意义，要找到是否有小的时候
      }
    }
  }
};
