/**
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。


示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
示例 4:

输入: nums = [1,3,5,6], target = 0
输出: 0
示例 5:

输入: nums = [1], target = 0
输出: 0
 

提示:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为无重复元素的升序排列数组
-104 <= target <= 104

*/

/**
 * 解题思路：
 *  这个已经是双指针解题的第三题了
 *  这题思路很简单
 *    读指针不断往前
 *    当读指针指向的元素小于目标元素 写指针也向前挪动一位
 *    当读指针指向的元素等于目标元素 写指针赋值读指针 结束循环（找到目标值了）
 *    当读指针指向的元素大于目标元素 跳出循环 此时写指针指向的元素就是插入的位置
 *
 *  进阶：
 *    题目如果要求在原数组的情况下实现插入这个值， 这时候可以再创建一个变量temp 用于存储这个值
 *    思路也比较简答 按照下面的代码 把大于部分的注释解开 就可以实现在原数组中插入
 *
 *  不得不说 双指针解题的思路真的很无解，在明白这个方法的使用之后我深刻的感知到确实是在进步，
 *    以前只会无脑的双层循环解题，现在会用更加简洁，性能更好的代码来解题了
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let readIndex = 0,
    writeIndex = 0,
    length = nums.length,
    position = 0,
    temp;

  while (readIndex < length) {
    if (nums[readIndex] < target) {
      // 小于
      writeIndex++;
      position++;
    } else if (nums[readIndex] === target) {
      // 等于
      writeIndex = readIndex;
      break;
    } else {
      // 大于
      // temp = nums[readIndex];
      // nums[writeIndex] = target;
      // target = temp;
      // writeIndex++;
      break;
    }
    readIndex++;
  }
  if (temp) {
    nums[length] = temp;
  }
  return writeIndex;
};

// console.log('end', searchInsert([1, 3, 5, 6], 2));
console.log('end', searchInsert([1, 3, 5, 6], 2));
