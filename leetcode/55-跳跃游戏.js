/**

给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

*/

/**
 * 解题思路：
 *  这题类似使用贪心算法，我们到数组的每一个点，判断这个点所能到达的最大的数组索引位置
 *  遍历下来 只要这个最大能够到达的位置+1(+1是因为索引从0开始) 是否 大于等于数组的长度
 *    - 如果满足，则说明能够到达
 *    - 如果不满足，则说明不能到达
 *  除了这个条件，还有前置条件
 *    - 当我们最大到达的位置于当前遍历的索引一致的时候，如果这个点刚好等于0 并且这时候最大能到达的位置+1也小于数组长度
 *  则直接停止遍历 直接返回false即可
 *
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let nextIndex = 0
	for (let i = 0; i < nums.length - 1; i++) {
		nextIndex = Math.max(nums[i] + i, nextIndex)
		if (nextIndex === i && nums[i] === 0 && nextIndex < nums.length) {
			break
		}
	}
	console.log(nextIndex + 1 >= nums.length)
}

// canJump([2, 3, 1, 1, 4])
// canJump([3, 2, 1, 0, 4])
// canJump([0, 2, 3])
// canJump([1, 0, 1, 0])
canJump([3, 0, 8, 2, 0, 0, 1])
