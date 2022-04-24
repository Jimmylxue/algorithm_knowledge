/**

给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

 

示例 1:

输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
示例 2:

输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
 

提示：

被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 解法1
var divide = function (dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  let negativeCount = 0; // 负数的个数
  let n1 = dividend,
    n2 = divisor; // 存下绝对值前的值
  // 记录负数的个数  需要知道的是 负负得正 正负得负
  if (dividend < 0) {
    dividend = Math.abs(dividend);
    negativeCount++;
  }
  if (divisor < 0) {
    divisor = Math.abs(divisor);
    negativeCount++;
  }
  // 判断两数的绝对值是否相等 前面已经处理过绝对值了
  if (dividend === divisor) {
    // 相等 根据 负数个数返回正1还是负1
    return negativeCount === 1 ? -1 : 1;
  }
  // 判断除数是否是为1 如果除数为1 可直接给出结果 不需要过多的循环
  if ([1, -1].includes(n2)) {
    // 返回对应的值
    return n2 === -1 ? n1 * -1 - 1 : n1;
  }
  // index就是商的结果
  let index = 0;
  // 循环获取
  while (divisor * index <= dividend) {
    index++;
  }
  index--;
  return negativeCount === 1 ? (index *= -1) : index;
};

console.log(divide2(2147483647, 2));

// 1 1
// -1 1

// -2147483648  -1
