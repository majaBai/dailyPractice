/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10^-5 will be accepted.

Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Constraints:
n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(k > nums.length) return null
    let res = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < nums.length; i++){
        let sum = nums[i]
        let count = 1
        for(let j = i + 1; j < nums.length && count < k; j++){
            sum += nums[j]
            count++
        }
        if(count === k){
           let currentLoopRes = sum/k
           res = Math.max(res, currentLoopRes)
        }
    }
    return res
};

function solution2(nums, k){
    if(nums.length < k) return null
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }

    let res = sum
    for(let j = k; j < nums.length; j++){
        sum += nums[j] - nums[j - k]
        res = Math.max(sum, res)
    }

    return res / k
}

function main(){
    // let t1 = [5], k1 = 1
    // let r1 = findMaxAverage(t1, k1)
    // console.log(r1)

    // let t2 = [], k2 = 1
    // let r2 = findMaxAverage(t2, k2)
    // console.log(r2)

    // let t3 = [1,12,-5,-6,50,3], k3 = 4
    // let r3 = findMaxAverage(t3, k3)
    // console.log(r3)

    // let t4 = [0, 0, 0, 0, 1, 0, 1], k4 = 5
    // let r4 = findMaxAverage(t4, k4)
    // console.log(r4)

    let t5 = [0,4,0,3,2], k5 = 1
    let r5 = solution2(t5, k5)
    console.log(r5)
}

main()