/**
 * 双指针 快排：
 *  先选取一个 检查标志位（checkInfo）这个值 为数组的第一个值
 *
 *    j 从数组右边开始 -> 向左
 *      检查j 这个位置的值 是否是 大于等于 标志位的值。 如果满足，则向左 移动一格 继续判断：
 *        当 j 这个位置的值 小于标志位 或者 i 和 j 相等了（两个指针相遇）这时候停止 不向左移动了
 *
 *    i 从数组左边开始 -> 向右
 *      检查i 这个位置的值 是否是 小于等于 标志位的值。 如果满足，则向右 移动一格 继续判断：
 *        当 i 这个位置的值 大于标志位 或者 i 和 j 相等了（两个指针相遇）这时候停止 不向右移动了
 *
 *    判断 i 是否 小于 j 如果小于 则 i 和 j 位置的值进行两两交换
 *
 *    将交换位置之后的大数组分割为两个小数组， 分别为：
 *      - 前一个数组的起始位置 -> i-1
 *      - i + 1 -> 前一个数组的结束位置
 *
 *    将拆分出来的两个数组 分别再次进行以上逻辑 排序
 */

/**
 * 快排之所以快，感觉在于它每次排序之后都将数组拆分成了两个数组，再对两个数组进行操作。
 *  整体上有点二分查找的思路。
 *  虽然也是两层循环，当然最差的情况下，就跟冒泡排序一样，事件复杂度是 O(N²) 但是平均的复杂度是 O(logN)
 *
 *  O(N²) 的性能是很差的（冒泡排序）。
 */

export function quickSort(arr: number[]) {
	/**
	 *
	 * @param left 数组起始索引
	 * @param right 数组最后位置索引
	 * @returns
	 */
	function sort(left: number, right: number) {
		/**
		 * checkInfo 检查的标志位的值
		 */
		let i, j, temp, checkInfo
		if (left > right) {
			return
		}
		checkInfo = arr[left]
		i = left
		j = right
		while (i !== j) {
			while (arr[j] >= checkInfo && i < j) {
				j--
			}
			while (arr[i] <= checkInfo && i < j) {
				i++
			}
			if (i < j) {
				temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
			}
		}

		arr[left] = arr[i]
		arr[i] = checkInfo
		sort(left, i - 1)
		sort(i + 1, right)
	}
	sort(0, arr.length - 1)
	return arr
}

quickSort([6, 1, 2, 7, 9, 3, 4, 5, 10, 8])
