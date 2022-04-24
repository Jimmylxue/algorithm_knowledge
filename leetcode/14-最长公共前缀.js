/*
  编写一个函数来查找字符串数组中的最长公共前缀。

  如果不存在公共前缀，返回空字符串 ""。
  示例 1:

  输入: ["flower","flow","flight"]
  输出: "fl"
  示例 2:

  输入: ["dog","racecar","car"]
  输出: ""
  解释: 输入不存在公共前缀。

*/

/*
  ### 参考了其他大佬的思路
  - 思路上其实是很好想的 两层循环，第一层循环先遍历出数组的每个字符串
  - 接着每个字符串的单个元素 如果一样就存起来，不一样就直接跳出循环
  ### 虽然思路上很容易，但是一动手就真的挺难的，难度就在于不知道怎么开始入手写 都是未知的
  - 看了大佬的写法，知道了 遇到这种情况，先取出数组的中的第一个字符除然后进行比较 有了一个已知的量就会好写了
  - 还有一个就是JS的一个every方法，这个方法返回一个布尔值，只有每个都为true的时候才会返回true  用在这里就非常的合适
*/ 

let longestCommonPrefix = function(strs) {
  let arr = [...strs]
  let start = arr[0]
  if(!start){
    return ''
  }
  let anser = ''
  for(let i=0;i<start.length;i++){
    let flag = arr.every(item=>item[i]===start[i]) // every方法 只有都为true才会返回true 否则都是false
    if(flag){
      anser+=start[i]
    }else{
      return anser
    }
  }
  return anser
};

console.log(longestCommonPrefix(["flower","flow","flight"]))