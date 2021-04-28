/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, 
return an array of all the integers that appears twice.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj = {}
    nums.forEach(n =>{
        if(obj[n]){
            obj[n] += 1
        } else{
            obj[n] = 1
        }
    })

    let res = []
    let keys = Object.keys(obj)
    keys.forEach(k =>{
        if(obj[k] >= 2){
            res.push(Number(k))
        }
    })

    return res
};


function solution2(nums){
    let res = []
    let n = nums.length
    for(let i = 0; i< nums.length; i++){
        let val = nums[i]
        while(val > n){
            val -= n
        }
        nums[val-1] += n                                                                             
    }
    for(let i = 0; i< nums.length; i++){
        let val = nums[i]
        if(val > 2*n){
            res.push(i + 1)
        }
    }
   return res
}

function main(){
    let r1 = [4,3,2,7,8,1,8,2,3,1]
    let a1 = solution2(r1)
    console.log(a1)

    let r2 = [1, 2]
    let a2 = solution2(r2)
    console.log(a2)

    let r3 = [2, 2]
    let a3 = solution2(r3)
    console.log(a3)
}
main()