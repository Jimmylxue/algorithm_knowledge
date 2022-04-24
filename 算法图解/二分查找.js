/**
 * 二分查找：
 *  在一个有序的元素列表中查找一个元素。我们就可以使用二分查找来很快的定位到我们需要查找的元素
 *  简单的理解就是每次都取列表中间的数，判断结果是大了还是小了，再在分割之后的元素列表中取中间的元素
 *  这个相比于简单查找（傻找）速度与性能能提升非常之多
 *  这么说可能没有什么概念，当元素列表中的元素量比较大的时候就会有效果，如：
 *      从1-100中找一个元素
 *      傻找最多需要查找99次才能找到
 *      二分查找最多只要查找到 7 次就一定能找到
 *     如果实在2400000个单词的字典里面找 这种情况就很适合二分查找 不适合傻找
 *
 *
 * 下面的代码我是通过递归的形式 写了一个简单的二分查找的算法  代码量是稍微偏长了一点 主要是一些边界的判断比较多
 *  但是时间复杂度是 log2N 还不错的
 */

/**
 *
 * @param {array} list
 * @param {number} target
 */
let binarySearch = (list, target) => {
  if (list.length === 0 || !target) {
    return -1;
  }
  if (list.length === 1 && list[0] !== target) {
    return -1;
  }
  if (list.length === 1 && list[0] === target) {
    return 0;
  }
  // 以上的边界判断
  let prev = 0,
    next = list.length - 1;
  // getIndex 递归方法
  const getIndex = (prev, next, list, target) => {
    console.log('prev', prev);
    console.log('next', next);
    console.log('----------');
    if (target === list[prev]) {
      return prev;
    } else if (target === list[next]) {
      return next;
    } else {
      let half = parseInt((prev + next) / 2);
      if (list[half] === target) {
        return half;
      } else {
        if (list[half] < target) {
          // 小了
          console.log('小了');
          prev = half;
          return getIndex(prev, next, list, target);
        } else {
          // 大了
          console.log('大了');
          next = half;
          return getIndex(prev, next, list, target);
        }
      }
    }
  };
  return getIndex(prev, next, list, target);
};

console.log('结果', binarySearch([1, 3, 4, 5, 6, 8, 9], 6));
