/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Constraints:
2 <= nums.length <= 500
0 <= nums[i] <= 100

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let r = []
   for(let i = 0; i < nums.length; i++){
       let cur = nums[i]
       let count = 0
       for(let j = 0; j < nums.length; j++){
           if(j != i && nums[j] < cur){
               count++
           }
       }
       r[i] = count
   }
   return r
};

function solution2(nums){
    let len = nums.length;
    let freq = new Array(101).fill(0)
    let freq2 = new Array(102).fill(0)
    let res =[]
    
    for(let i=0;i<len;i++) freq[nums[i]]++;
    for(let i=1;i<101;i++) freq[i] += freq[i-1];
    for(let i=1;i<101;i++) freq2[i] += freq[i-1];
    for(let i=0;i<len;i++) res[i] = freq2[nums[i]];
    
    return res;
}
function main(){
    let nums = [8,1,2,2,3]
    let r = solution2(nums)
    console.log(r)
}
   
main()