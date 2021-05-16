/*
Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let lo = -1, i = 0, hi = nums.length
    while(i < hi){
        if(nums[i] === 0){
            swap(nums, ++lo, i)
            i++
        } else if(nums[i] === 2){
            swap(nums, i, --hi)
        } else{
            i++
        }
    }
};
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

}

function main(){
    let t1 = [2,0,2,1,1,0]
    let t2 = [0,2,0,1]
    let t3 = [1,0]

    sortColors(t1)
    sortColors(t2)
    sortColors(t3)
    console.log(t1)
    console.log(t2)
    console.log(t3)
}
main()