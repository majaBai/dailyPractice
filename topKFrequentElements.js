/*
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Constraints:

1 <= nums.legth <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(k === nums.length) return nums
    let o = {}
    for(let i= 0; i<nums.length; i++){
        let n = nums[i]
        if(!o[n]){
            o[n] = {}
            o[n].key = n
            o[n].val = 1
        } else {
            o[n].val += 1
        }
    }
    let temp = []
    for(let k in o){
        temp.push(o[k])
    }
    temp.sort((val1, val2) => val2.val - val1.val)
    let r = []
    for(let i = 0; i< k; i++){
        r.push(temp[i].key)
    }
    return r
};

// 还可以用 minHeap 解决



function main(){
    let nums1 = [1,1,1,2,2,3], k1 = 2
    let r1 = topKFrequent(nums1, k1)
    console.log(r1)

    let nums2 = [1, 2], k2 = 2
    let r2 = topKFrequent(nums2, k2)
    console.log(r2)

    let nums3 = [1, 0, 0, 2], k3 = 1
    let r3 = topKFrequent(nums3, k3)
    console.log(r3)
}

main()