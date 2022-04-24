const arr = [1, 2, 3, 4, 5, 6]

/**
 *
 * @param {number[]} arr
 * @param {number} index
 */
let sum = 0
function diff(arr, index) {
	if (index === arr.length) {
		return 0
	}
	return arr[index] + diff(arr, index + 1)
}

console.log(diff(arr, 0))

/**
 * 递归最重要的两个条件：
 *  极限条件 & 递归条件
 *
 *  极限条件： 跳出递归的条件
 *  递归条件： 能正常递归的条件
 */
