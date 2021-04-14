/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a-b)
    nums2.sort((a, b) => a-b)
    let r = []
    for(let i = 0, j = 0; i < nums1.length && j <nums2.length; ){
        if(nums1[i] < nums2[j]){
            i++
        } else if(nums1[i] > nums2[j]){
            j++
        } else {
            r.push(nums1[i])
            i++
            j++
        }
    }
    return r
};

function main(){
    let t1 =[1, 2, 2, 1], t2=[2, 2]
    let r1 = intersect(t1, t2)
    console.log(r1) //[ 2, 2 ]
}
main()