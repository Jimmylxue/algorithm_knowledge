/**

给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

 

示例 1：

输入：s = "Hello World"
输出：5
示例 2：

输入：s = "   fly me   to   the moon  "
输出：4
示例 3：

输入：s = "luffy is still joyboy"
输出：6
 

提示：

1 <= s.length <= 104
s 仅有英文字母和空格 ' ' 组成
s 中至少存在一个单词

 */

/**
 * 这题这里就是个数学题
 *  一层循环  倒叙遍历 第一次遇到非空字符串开始计数, 再遇到空字符串的时候结束循环 计算非空下的遍历次数
 */

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
//   s = [...s].reverse().join("");
//   let flag = 0;
//   let sum = 0;
//   let length = s.length;
//   for (let i = 0; i < length; i++) {
//     if (flag === 0 && s[i] !== " ") {
//       flag = 1;
//       sum++;
//       continue;
//     }
//     if (flag === 1 && s[i] !== " ") {
//       sum++;
//     }
//     if (flag === 1 && s[i] === " ") {
//       flag = 2;
//       break;
//     }
//   }
//   return sum;
// };

var lengthOfLastWord = function (s) {
  let flag = 0;
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (flag === 0 && s[i] !== " ") {
      flag = 1;
      sum++;
      continue;
    }
    if (flag === 1 && s[i] !== " ") {
      sum++;
    }
    if (flag === 1 && s[i] === " ") {
      flag = 2;
      break;
    }
  }
  return sum;
};

console.log(lengthOfLastWord("hello world"));
