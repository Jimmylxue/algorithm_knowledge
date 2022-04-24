/**
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [0]
输出：[1]
 

提示：

1 <= digits.length <= 100
0 <= digits[i] <= 9

 */

/**
 * 首先要说这题我解的并不好 ！！！ 甚至是很差  代码量太大了 执行用了100ms 击败10%
 *  但是因为我这个解题思路遇到了一些问题 也间接的知道了一些细节的内容 所以任然决定保留这份答案
 *
 * 我的思路：
 *  - 先将数组的最后一位 +1
 *  - 再写一个递归函数 从数组的最后一位开始 如果遇到10 则取0 向前一位进1
 *  - 最后将这个新的数组 拍平成字符串 防止出现 [10,2,3,4] 第一位是 [10] 拍成 10234
 *  - 将字符串再一位一位整成数组 [1,0,2,3,4]
 *
 * 细节：
 *  我原本想的是 直接改成字符 Number()转一下 直接+1 最后再拍成数组
 *    实则这样会有问题  Number()转是有精度的 当字符串特别长的时候，如：'6145390195186705543' 通过Number转只能转成 6145390195186705000
 *    Number的精度只有 16位
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let str = [];
  if (digits.length === 1) {
    str.push(digits[0]);
  } else {
    for (let i = 0; i < digits.length; i++) {
      if (str.length === 0 && digits[i] == 0) {
        continue;
      } else {
        str.push(digits[i]);
      }
    }
  }
  let length = str.length - 1;
  str[length] += 1;
  function addOne(length) {
    if (str[length] === 10) {
      console.log(111);
      if (length !== 0) {
        str[length] = 0;
        str[length - 1] += 1;
        addOne(length - 1);
      }
    }
  }

  addOne(length);
  str = str.join("");
  str = [...str].map((item) => Number(item));
  return str;
};

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([0]));
