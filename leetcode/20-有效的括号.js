/*
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

  有效字符串需满足：

  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。

  示例 1：

  输入：s = "()"
  输出：true
  示例 2：

  输入：s = "()[]{}"
  输出：true
  示例 3：

  输入：s = "(]"
  输出：false
  示例 4：

  输入：s = "([)]"
  输出：false
  示例 5：

  输入：s = "{[]}"
  输出：true

*/

/*
  我的解题思路：
    本来想着是先获取字符串中间的位置，再左右之间对比，后面发现自己考虑的不周全，这种解法只能解决嵌套的括号，单个的多的括号不能解决

    后面最终想法是遍历这个字符串 再把每次结果存到一个新数组里面，如果存入的过程发现要存的这个字符和上一个字符是可以配对的，就这个不存，同时清空掉上一个值

    这样一轮遍历下来 如果这个新数组的长度是 0  说明全部匹配 如果不为0 则不匹配  时间人复杂度是 OX
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let length = s.length
  console.log(length)
  if(length%2!==0){
    return false
  }
  
  let leftPart = {
    '{':1,
    '[':2,
    '(':3,
    '}':-1,
    ']':-2,
    ')':-3
  }

  let arr = []
  for(let i = 0;i < length;i++){
    if(arr.length==0){
      if(leftPart[s[i]]<0){
        arr.push(leftPart[s[i]])
        break
      }
      arr.push(leftPart[s[i]])
    }else{
      arr.push(leftPart[s[i]])
      console.log('xxxxx',arr[arr.length-1]==arr[arr.length-2],arr)
      if(arr[arr.length-1]==-arr[arr.length-2]){
        console.log(111)
        if(arr[arr.length-2]>0&&arr[arr.length-1]<0){
          arr.pop()
          arr.pop()
        }
      }
    }
  }
  return arr.length===0
};

// console.log(isValid('[['))
console.log(isValid('}}'))
// console.log(isValid("(){}}{"))
// console.log(isValid("(}{)"))
// console.log(isValid("()"))
// console.log(isValid('[()]'))
// console.log(isValid("()[]{}{}"))