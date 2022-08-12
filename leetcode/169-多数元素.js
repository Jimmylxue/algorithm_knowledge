/**

169. 多数元素
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1：

输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
 

提示：
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */

/**
 * 解题思路：
 *  这题时间复杂度要求为O(n) 说明只能一层循环解题，这里借用了 数组 这么一数据结构进行解题（因为数组的下标index正好可以被我们用作key）
 *  所以只要每遍历到一个数字，将数组这个索引下的值 +1 即可
 *  当全部都执行结束之后，再次一层遍历，找出数组中哪个值大于 比对值， 那么那个值所对应的索引就是我们的答案！
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const arr = new Array(Math.max(...nums) + 1).fill(0)
	const check = nums.length / 2
	nums.forEach(num => {
		arr[num]++
	})
	let index = arr.findIndex((_, index) => {
		return arr[index] > check
	})
	return index
}

console.log(majorityElement([3, 2, 3]))
