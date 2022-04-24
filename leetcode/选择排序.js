/**
  选择排序
    第一轮 从数组第0个元素开始遍历 在遍历的过程中如果找到最小的值 就将这个最小的值 和数组的第0个值进行替换
    第二轮 从数组第1个元素开始遍历 在遍历的过程中如果找到最小的值 就将这个最小的值 和数组的第1个值进行替换
    ....

    最终数组循环遍历结束之后 数组也就拍好了

    需要使用两层循环  时间复杂度为 ON2
    
    选择排序适用于数组量小的情况下  好处是操作的一直都是同一个数组 时间换空间的方式
*/

/**
 *
 * @param {array} arr
 */
function selectSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(selectSort([1, 3, 2, 1, 4, 3, 5, 8, 4, 3]));
