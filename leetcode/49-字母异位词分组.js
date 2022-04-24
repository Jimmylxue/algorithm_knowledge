/**

给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

 */

/**
 * 解题思路：
 *  这题我没有找到什么比较优秀的思路思路解题，有点类似于是暴力解题了。
 *    - 一次for循环，遍历一整个数组
 *    - 初始化一个对象
 *    - 将每次遍历到的字符串进行一次排序，再转成字符串，以这个字符串作为key
 *      - 判断对象中是否有这个为key的值，如果没有将这个key的值作为一个数组的方式存入
 *      - 如果有这个key，则把遍历到的这个值插入到这个key的数组中
 *    遍历结束，通过Object.values()将值以一个数组的形式返回
 *
 *  这个解题思路我在leetcode上速度能击败93.96%的人，但是内存消耗比较大只能击败5%的人
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let tes = [...strs[i]].sort().join("");
    if (!obj[tes]) {
      obj[tes] = [];
      obj[tes].push(strs[i]);
    } else {
      obj[tes].push(strs[i]);
    }
  }
  console.log(Object.values(obj));
};

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams([""]);
