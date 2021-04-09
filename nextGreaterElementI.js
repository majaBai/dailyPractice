/*
You are given two integer arrays nums1 and nums2 both of unique elements, where nums1 is a subset of nums2.

Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. 
If it does not exist, return -1 for this number.

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation:
For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
For number 1 in the first array, the next greater number for it in the second array is 3.
For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

Constraints:
1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
All integers in nums1 and nums2 are unique.
All the integers of nums1 also appear in nums2.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
    let r = []
    let temp = []
    let map = {}
    for(let i = 0; i< nums2.length; i++){
        while(temp.length > 0 && nums2[i] > temp[temp.length - 1]){
            map[temp.pop()] = nums2[i]
        }
        temp.push(nums2[i])
    }

    while(temp.length > 0){
        map[temp.shift()] = -1
    }

    for(let i = 0; i < nums1.length; i++){
        r[i] = map[nums1[i]]
    }

    return r
};





function main(){
    let nums1 = [4,1,2], nums2 = [1,3,4,2]
    let r = nextGreaterElement(nums1, nums2)
    console.log(r)
}
main()