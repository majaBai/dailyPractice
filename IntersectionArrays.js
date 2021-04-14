/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length < 1 || nums2.length < 1) return []
    let res = new Set()
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b)=> a-b)
    for(let i = 0, j = 0; i< nums1.length && j < nums2.length; ){
        if(nums1[i] < nums2[j]){
            i++
        } else if(nums1[i] > nums2[j]){
            j++
        } else {
            res.add(nums1[i])
            i++
            j++
        }
    }
    let r = Array.from(res)
    return r
};

function main(){
  let  nums1 = [1,2,2,1], nums2 = [2,2]
  let r = intersection(nums1, nums2)
  console.log(r) // [2]
}
main()