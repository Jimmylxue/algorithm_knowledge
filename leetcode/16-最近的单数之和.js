/*
  给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
  示例：

  输入：nums = [-1,2,1,-4], target = 1
  输出：2
  解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
   

  提示：

  3 <= nums.length <= 10^3
  -10^3 <= nums[i] <= 10^3
  -10^4 <= target <= 10^4

*/

let threeSumClosest = function(nums, target) {
  let arr = [...nums]
  arr = arr.sort((a,b)=>a-b)
  let brr = []
  // 使用双指针夹逼  可以极大程度上减少循环的次数
  for(let i = 0;i<arr.length-1;i++){
    let j = i+1
    let k = arr.length-1
    while(j<k){
      let sum = arr[i] + arr[j] + arr[k]
      if(sum>target){
        brr[sum-target] = sum
        k--
      }else{
        brr[target-sum] = sum
        j++
      }
    }
  }
  return brr.find(item=>item!=undefined)
  // brr.indexOf(brr.find(item=>item!=undefined))
};
console.log(threeSumClosest([0,0,0],1))
