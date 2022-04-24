/**
  冒泡排序  --  我基本是背下来的~~~
    冒泡排序 每次循环 两两进行比较  进行位置交换
    
 */

/**
 *
 * @param {array} arr
 */
function bubbleSort(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 2, 1, 4, 3, 5, 8, 4, 3]));
