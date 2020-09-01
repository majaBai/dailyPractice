/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:
Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/* 
O(n) + o(n) and the condition 'sorted array' is not used
*/  
var twoSum = function(numbers, target) {
  let r = []
  if(numbers.length < 2 || numbers[0] > target) return r
  let o = {}
  for(let i = 0; i < numbers.length; i++){
    let val = numbers[i]
    o[val] = i
  }
  for(let i = 0; i < numbers.length; i++){
    let key = target - numbers[i]
    let indx = o[key]
    if(indx != undefined && indx > i){
      r.push(i+1)
      r.push(indx+1)
      break
    }
  }
    return r
}

/*
two pointer, O(n) + o(1)
*/ 

function twoSumII(numbers, target){
  if(numbers.length < 2) return []
  let i = 0, j = numbers.length-1
  let sum = numbers[i] + numbers[j]
  while(sum != target){
    if(i >= j) return []
    sum > target? j-- : i++
    sum = numbers[i] + numbers[j]
  }
  return [i+1, j+1]
}

function main(){

  let nums = [2,7,11,15]
  let target = 18
  console.log(twoSumII(nums, target))

  let nums1 = [-1, 0]
  let target1 = -1
  console.log(twoSumII(nums1, target1))
}

main()

