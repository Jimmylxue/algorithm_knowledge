/**

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

 

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串
 

提示：

1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成

*/

/**
 * 这题比较简单
 *  先通过正则匹配 去掉 处字母和数字的内容
 *  再进行一次正则匹配 将大写字母转正小写字母
 *  最后将得到的字符转成数组倒序一下再拼成字符串 如果和原字符串一样 就是回文字符串
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '');
  s = s.replace(/[A-Z]/g, (a, b, c) => {
    return a.toLocaleLowerCase();
  });
  return s === [...s].reverse().join('');
};

// isPalindrome('A man, a plan, a canal: Panama');
// console.log(isPalindrome('race a car'));
console.log(isPalindrome('0P'));
// console.log(isPalindrome(' '));
