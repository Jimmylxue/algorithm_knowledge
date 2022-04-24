/**
  给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。
  所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

  示例 1：

  输入：address = "1.1.1.1"
  输出："1[.]1[.]1[.]1"

  示例 2：

  输入：address = "255.100.50.0"
  输出："255[.]100[.]50[.]0"

  提示：

  给出的 address 是一个有效的 IPv4 地址
*/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  /**
   * 使用字符串的 replace 方法 匹配 .(点) 字符 全局替换成 [.]
   */
  return address.replace(/\./g, (arg) => {
    console.log(arg); // 匹配到的每一项
    return `[${arg}]`;
  });
};

console.log(defangIPaddr("255.100.50.0"));
