/**

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

 */

/**
 * 解题思路：
 *  这题我的第一想法觉得需要处理很多东西，写了很久，加了很多的判断，终于完成，就是下面性能差的一个版本
 *  之所以要保留下来就是整个题目深刻的让我意识到了，不应该埋头苦做，而是应该巧解
 *    比如这题，我们需要的是先将这个二维数组排序(根据二维数组的开始项进行排序)
 *    因为在这道题中 开始区间和结束区间，相对更加重要的一个是开始区间，所以要根据其排序
 *    如果一个区间的开始区间就比要对比结束区间更大时，则两者肯定时不在一个区间了
 *    因为我们做过排序，所以现在遍历到的这个区间的开始区间一定是大于 要对比这个区间的开始区间的
 *    可以发现，因为排序 使得我们可以省略掉很多的 对比条件
 *  如：未排序之前，我的性能差版本使用两层循环 耗时非常之久
 *      排序之后，性能更优版本只是用一层循环  极大加快了时间
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 性能差的版本
var merge = function (intervals) {
	// console.log(intervals)
	intervals.sort((a, b) => a[0] - b[0])
	// console.log(intervals)
	let res = []
	for (let i = 0; i < intervals.length; i++) {
		if (res.length === 0) {
			res.push(intervals[i])
		} else {
			const [key, value] = intervals[i]
			handle(key, value)
		}
		// console.log(key, value)
	}
	function handle(key, value) {
		for (let i = 0; i < res.length; i++) {
			const [pre, next] = res[i]
			if (key < pre && value >= pre) {
				res[i][0] = key
			} else if (key < pre && value < pre) {
				console.log(11)
				res.push([key, value])
			} else if (key > next) {
				if (i === res.length - 1) {
					res.push([key, value])
					break
				} else {
					continue
				}
			}
			if (value > next) {
				res[i][1] = value
			}
		}
	}
	console.log(res)
}

// 性能更优版本
var merge = function (intervals) {
	if (intervals.length === 0 || intervals.length === 1) {
		return intervals
	}
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
}

// merge([
// 	[1, 4],
// 	[4, 5],
// ])
// merge([
// 	[2, 3],
// 	[4, 5],
// 	[6, 7],
// 	[8, 9],
// 	[1, 10],
// ])
merge([
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
])
// merge([
// 	[1, 4],
// 	[0, 1],
// ])
// merge([
// 	[2, 3],
// 	[1, 6],
// 	[8, 10],
// 	[15, 18],
// ])
