/**

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var multiply = function (num1, num2) {
//   if (num1 == 0 || num2 == 0) {
//     return 0;
//   }
//   let flag = num1.length > num2.length ? true : false;
//   let anser = null;
//   for (let i = num1.length - 1; i >= 0; i--) {
//     // console.log(num1[i]);
//     let arr = [];
//     let addCount = 0;
//     for (let j = num2.length - 1; j >= 0; j--) {
//       let res = num1[i] * num2[j] + addCount;
//       // console.log(num1[i], num2[j]);
//       if (res > 9) {
//         if (j === 0) {
//           arr.unshift(parseInt(res / 10), res % 10);
//         } else {
//           arr.unshift(res % 10); // 取个位
//           addCount = parseInt(res / 10);
//         }
//       } else {
//         arr.unshift(res);
//       }
//     }
//     // console.log(arr);
//     if (!anser) {
//       anser = arr;
//     } else {
//       let pushCount = num1.length - i;
//       while (pushCount - 1) {
//         arr.push(0);
//         pushCount--;
//       }
//       let maxLength = anser.length > arr.length ? anser.length : arr.length;
//       let otherAddCount = 0;
//       for (let i = maxLength - 1; i >= 0; i--) {
//         let res = (anser[i] || 0) + (arr[i] || 0);
//         if (res > 9) {
//           if (i === 0) {
//             anser[i] = res % 10;
//             anser.unshift(parseInt(res / 10));
//           } else {
//             anser[i] = res % 10;
//             otherAddCount = parseInt(res / 10);
//           }
//         } else {
//           anser[i] = res;
//         }
//       }
//     }

//     // anser += Number(arr.join("")) * Math.pow(10, num1.length - i - 1);
//   }
//   console.log(anser);
// };
var multiply = function (num1, num2) {
  let m = num1.length,
    n = num2.length;
  // 结果最多为m+n位
  let res = new Array(m + n).fill(0);
  // 从个位数开始逐位相乘
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = (num1[i] - 0) * (num2[j] - 0);
      // 乘积在res对应的索引位置
      let p1 = i + j,
        p2 = i + j + 1;
      // 叠加到res上
      let sum = mul + res[p2];
      res[p2] = sum % 10;
      res[p1] += parseInt(sum / 10);
    }
  }
  // 结果前缀可能存在0（未使用的位）
  let i = 0;
  while (i < res.length && res[i] == 0) {
    i++;
  }
  // 将计算结果转化成字符串
  let str = "";
  for (; i < res.length; i++) {
    str += res[i];
  }
  console.log(str.length == 0 ? "0" : str);
  return str.length == 0 ? "0" : str;
};

multiply("123456789", "987654321");
// multiply("123", "456");
