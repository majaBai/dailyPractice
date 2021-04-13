/*
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition.

Constraints:

2 <= nums.length <= 2 * 104
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 1000

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    for(let i =0; i< nums.length;i++){
        if(!sameParity(i, nums[i])){
            for(let j = i +1; j < nums.length; j++){
                if(!sameParity(nums[j], nums[i])){
                    swap(nums, i, j)
                    break
                }
            }
        }
    }
    return nums
};

function sameParity(i, j){
    return i % 2 === j % 2
}
function swap(a, i, j){
    [a[i], a[j]] = [a[j], a[i]]
}

function solution2(arr){
    let even = arr.filter(val => val % 2 === 0)
    let odd = arr.filter(val => val % 2 !== 0)
    for(let i = 0; i< arr.length; i++){
        if(i % 2 === 0){
            arr[i] = even.pop()
        } else {
            arr[i] = odd.pop()
        }
    }
   return arr
}

function main(){
    let a = [4,2,5,7]
    let r = solution2(a)
    console.log(r)
}
main()