/**

22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]

 */

/**
 * 这个问题一开始我的想法就是一定得通过递归才能进行解出最后的答案。
 *  其实递归的这个套路是真的非常的好用的，因为递归我们并不需要太多的关注于它实现的过程，人脑觉得非常难算的过程计算机会帮我们算
 *  我们要做的就是让递归在合适的时候退出出去， 否则就会进入一个死循环
 *
 * 这个的题目的思路就是使用 回流重塑的方式进行解题
 *  给定一个数字N 生成的是左括号和右括号 我们创建一个字符串
 *  在满足情况的下 不断的为这个字符串添加左括号或者右括号
 *  在长度达到限制之后就可以得到我们最终的效果
 *
 *  这里有的三个条件
 *    - 当字符串的数量 等于左括号数量*2 说明递归完毕
 *    - 如果左括号数量小于n 说明这种情况可以继续添加左括号
 *    - 如果右括号小于左括号  说明这种情况是可以添加右括号的
 *
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let arr = [];
  diff(0, 0, n, '', arr);
  console.log(arr);
  // 通过递归回溯进行获取结果
  /**
   *
   * @param {numer} left  左括号的数量
   * @param {numer} right  右括号的数量
   * @param {numer} n  左括号最多的数量
   * @param {string} str  字符串
   * @param {array} arr  存储的结果
   */
  function diff(left, right, n, str, arr) {
    if (str.length === n * 2) {
      // 当字符串的数量 等于左括号数量*2 说明递归完毕
      arr.push(str);
    }

    if (left < n) {
      // 如果左括号数量小于n 说明这种情况可以继续添加左括号
      diff(left + 1, right, n, str + '(', arr);
    }

    if (right < left) {
      // 如果右括号小于左括号  说明这种情况是可以添加右括号的
      diff(left, right + 1, n, str + ')', arr);
    }
  }
};

generateParenthesis(3);
