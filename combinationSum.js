/*
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Constraints:

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
All elements of candidates are distinct.
1 <= target <= 500
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
    let combinations = [];
    let n = candidates.length - 1;
  
  function findCombinations(nums, target, sIndex) {
    if (target === 0) {combinations.push([...nums])}
    for (let i = sIndex; i <= n; i++) {
      const c = candidates[i];
      if (c <= target) {
        nums.push(c);
        findCombinations(nums, target - c, i);
        nums.pop();
      }
    }
  }
  
  findCombinations([],target, 0);
  return combinations;
}

function main(){
    let nums = [6, 7], target = 7
    let r = combinationSum(nums, target)
    console.log(r)
}

main()