/**
 * 插入排序
 *  这个排序的场景是十分的像我们打扑克的时候的场景，
 *  抽一张牌时（current） 会一个个的和前面的牌进行比较
 *  直到找打比这个牌小的地方（preIndex） 插入进去 后面的全部往后挪动一位
 *
 *  这个排序也比较好理解 时间复杂度也是 ON2
 */

/**
 *
 * @param {array} arr
 */
function insertSort(arr) {
  let length = arr.length;
  let preIndex, current;
  for (let i = 1; i < length; i++) {
    preIndex = i - 1; // 记录前一个数的索引
    current = arr[i]; // 记录比较的这个值
    while (preIndex >= 0 && arr[preIndex] > current) {
      // 在这个循环下 如果前一个数比当前这个数大 则后一个将前一个数覆盖
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    // 当循环结束 说明找到了需要替换的位置 将这个位置的值替换成最初存的那个current即可
    arr[preIndex + 1] = current;
  }
  return arr;
}

console.log(insertSort([1, 3, 2, 1, 4, 3, 5, 8, 4, 3]));
