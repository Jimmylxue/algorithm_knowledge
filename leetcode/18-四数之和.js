/*
  
  给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
  注意：答案中不可以包含重复的四元组。 

  示例 1：

  输入：nums = [1,0,-1,0,-2,2], target = 0
  输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

  示例 2：

  输入：nums = [], target = 0
  输出：[]

  提示：

  0 <= nums.length <= 200
  -109 <= nums[i] <= 109
  -109 <= target <= 109
*/ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/*
  暴力计算法，写出来以后自己都笑了，四层循环，可见时间复杂度得有多差，这种解法非常的简单，很快就能写出来，但是代码的效率实在是太低了  

  var fourSum = function(nums, target) {
    let anser = []
    nums = nums.sort((a,b)=>a-b)
    for(let i = 0;i< nums.length;i++){
      for(let j = i+1;j<nums.length;j++){
        for(let k = j+1;k<nums.length;k++){
          for(let h = k+1;h<nums.length;h++){
            if(nums[i]+nums[j]+nums[k]+nums[h] === target){
              let brr = [nums[i],nums[j],nums[k],nums[h]]
              let temp = anser.map(item=>JSON.stringify(item))
              if(!temp.includes(JSON.stringify(brr))){
                anser.push(brr)
              }
            }
          }
        }
      }
    }
    return anser
  };
*/
//  可以适当的做一些边界处理 防止无用的循环
var fourSum = function(nums, target) {
  let anser = []
  nums = nums.sort((a,b)=>a-b)
  for(let i = 0;i< nums.length;i++){
    for(let j = i+1;j<nums.length;j++){
      if(nums[i]+nums[j]>target) break
      for(let k = j+1;k<nums.length;k++){
        if(nums[i]+nums[j]+nums[k]>target) break
        for(let h = k+1;h<nums.length;h++){
          if(nums[i]+nums[j]+nums[k]+nums[h]>target) break
          if(nums[i]+nums[j]+nums[k]+nums[h] === target){
            let brr = [nums[i],nums[j],nums[k],nums[h]]
            let temp = anser.map(item=>JSON.stringify(item))
            if(!temp.includes(JSON.stringify(brr))){
              anser.push(brr)
            }
          }
        }
      }
    }
  }
  return anser
};

fourSum([1,0,-1,0,-2,2],0)
console.log(fourSum([2,2,2,2,2],8))