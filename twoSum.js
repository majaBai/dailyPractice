/*
Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]
*/

// O(n) + O(n)
function twoSum(nums, target){
  let r = []
  if(nums.length < 2) return r
  let o = {}
  for(let i = 0; i < nums.length; i++){
    o[nums[i]] = i
  }
  
  for(let i = 0; i < nums.length; i++){
    let key = target - nums[i]
    let index = o[key]
    if(index != undefined && index != i){
      r.push(i)
      r.push(o[key])
      break
    }
  }
  return r
}

function main(){
    let nums = [2,7,11,15]
    let target = 9
    console.log(twoSum(nums, target))

    let nums1 = [2,7,11,15]
    let target1 = 3
    console.log(twoSum(nums1, target1))

}

main()