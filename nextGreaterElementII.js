/*
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), 
return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, 
which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.
*/

var nextGreaterElements = function(nums) {
    let r = []
    for(let i = 0; i < nums.length; i++){
        let hasGreaterAfter = false
        let hasGreaterBefore = false
        for(let j = i+ 1; j < nums.length; j++){
            if(nums[j] > nums[i]){
                r.push(nums[j])
                hasGreaterAfter = true
                break
            }
        }
        if(!hasGreaterAfter){
            for(let k =0; k <i; k++){
                if(nums[k] > nums[i]){
                    r.push(nums[k])
                    hasGreaterBefore = true
                    break
                }
            }
            if(!hasGreaterBefore){
                r.push(-1)
            }
        }
    }
    return r
};

// 方法2
function greater2(nums){
    let r = []
    for(let i = 0; i < nums.length; i++){
        r[i] = -1
        for(let j = 1; j< nums.length; j++){
            if(nums[(i+j)%nums.length] > nums[i]){
                r[i] = nums[(i+j)%nums.length]
                break
            }
        }
    }
    return r
}



function main(){
    let nums1 = [1,2,1]
    let r = greater2(nums1)
    console.log(r)
}
main()