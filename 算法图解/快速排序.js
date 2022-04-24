/**
 * 快速排序： 顾名思义是最快的一种排序
 *  时间复杂度是  OlogN
 *  这里采用递归的思路
 *
 * 思路： 先取出数组中的一个值，作为 基准值，
 *      根据这个基准值 再分为小于基准值的数组 和 大于基准值 的数组
 *      进入递归
 *      当递归的数组小于两个时  跳出递归 将这个数组返回
 *      最后将每个数组拼接在一起
 */

const arr = [11, 2, 4, 3, 6, 87]
/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

function quickSort(arr) {
	if (arr.length < 2) {
		return arr
	}
	let pivot = arr[0]
	let less = arr.slice(1).filter(item => item <= pivot)
	let greater = arr.slice(1).filter(item => item > pivot)
	return quickSort(less).concat([pivot]).concat(quickSort(greater))
}

console.log('res', quickSort(arr))
