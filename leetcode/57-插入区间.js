/**

给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
示例 3：

输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]
示例 4：

输入：intervals = [[1,5]], newInterval = [2,3]
输出：[[1,5]]
示例 5：

输入：intervals = [[1,5]], newInterval = [2,7]
输出：[[1,7]]

 */

/**
 * 解题思路：
 *  这题这上一题的解题思路基本一致，只不过题目给我们的是一个不含重复的区间集合
 *  再额外给我们一个区间，我们只要将这个额外的区间加入到区间集合中，
 *  这样这题就完全变成了上一题的解题思路
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	if (intervals.length === 0) {
		return [newInterval]
	}
	intervals.push(newInterval)
	intervals.sort((a, b) => a[0] - b[0])
	console.log(intervals)
	let res = []
	let current = intervals[0]
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] > current[1]) {
			res.push(current)
			current = intervals[i]
		} else {
			current[1] = Math.max(current[1], intervals[i][1])
		}
	}
	res.push(current)
	return res
}

console.log(
	// insert(
	// 	[
	// 		[1, 3],
	// 		[6, 9],
	// 	],
	// 	[2, 5]
	// )
	insert(
		[
			[1, 2],
			[3, 5],
			[6, 7],
			[8, 10],
			[12, 16],
		],
		[4, 8]
	)
)
