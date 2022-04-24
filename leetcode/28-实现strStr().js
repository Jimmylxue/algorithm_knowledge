/**
实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

说明：

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

示例 1：

输入：haystack = "hello", needle = "ll"
输出：2
示例 2：

输入：haystack = "aaaaa", needle = "bba"
输出：-1
示例 3：

输入：haystack = "", needle = ""
输出：0
 

提示：

0 <= haystack.length, needle.length <= 5 * 104
haystack 和 needle 仅由小写英文字符组成

*/

/**
 * 算法的好处在于 培养了优秀的思维
 *  就像这道理 看似不难 但是最后提交就是不过 因为少了很多的边界处理
 *
 *  如：当两个字符串长度是一样的时候 就没有必要再去遍历一个个比较了，直接两个源字符串进行比较即可
 *      当两个字符串超出比较的边界，直接返回-1 没有必要再进行比较
 *
 *  我的思路： 获取第二个参数的字符串长度，
 *              从第一个字符串的第一个位置进行字符串截取指定长度进行比较
 *              只要匹配到了直接 退出循环 返回匹配到的这个索引
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 当长度相同 直接比较两个字符串是否相等
  if (haystack.length === needle.length && haystack !== needle) {
    return -1;
  }
  // 边界处理
  if (
    needle.length > 5 * Math.pow(10, 4) ||
    haystack.length > 5 * Math.pow(10, 4)
  ) {
    return -1;
  }
  // 边界处理
  if (haystack === "" && needle === "") {
    return 0;
  }
  // 边界处理
  if (haystack.length < needle.length) {
    return -1;
  }

  let index = -1;
  let n2Length = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (getString(i, n2Length) === needle) {
      // 匹配到了 直接退出循环 返回这个索引
      index = i;
      break;
    }
  }

  function getString(start, end) {
    let str = "";
    for (let i = start; i < start + end; i++) {
      str += haystack[i];
    }
    // console.log(str);
    return str;
  }

  return index;
};

// strStr(
//   ""
// );
