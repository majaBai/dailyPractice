/*
Given two sorted arrays nums1 and nums2 of size m and n respectively.
Return the median of the two sorted arrays.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
nums1,length == m
nums2,length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 // O(n) + O(n)
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = []
    let i = 0, j = 0
    while(i < nums1.length && j < nums2.length){
      if(nums1[i] < nums2[j]){
        merged.push(nums1[i])
        i++
      } else {
        merged.push(nums2[j])
        j++
      }
    }
    while(i < nums1.length){
      merged.push(nums1[i])
      i++
    }
    while(j < nums2.length){
      merged.push(nums2[j])
      j++
    }

    let len = merged.length

    if(len%2 !== 0){
      return merged[parseInt(len/2)]
    } else{
      return (merged[len/2] + merged[len/2 - 1]) / 2
    }
}


function main(){
  let nums1 = [1, 2], nums2 = [3, 4]
  let r = findMedianSortedArrays(nums1, nums2)
  console.log(r)


}

main()