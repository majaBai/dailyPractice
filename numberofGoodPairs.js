/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let temp = {}
    for(let i= 0; i< nums.length; i++){
        if(temp[nums[i]]){
            temp[nums[i]].push(i)
        } else {
            temp[nums[i]] = []
            temp[nums[i]].push(i)
        }
    }

    let res = 0

    for(let key in temp){
        let n = temp[key].length
        if(n > 1){
            let c = 0
            while(n > 1){
                c += n-1
                n--
            }
            res += c
        }
    }

    return res
};

function solution2(nums){
    let temp = {}
    let res = 0
    for(let item of nums){
       temp[item]? temp[item]++ : temp[item]=1
    }
    for(let key in temp){
        if(temp[key] > 1){
            let n = temp[key]
            while(n > 1){
                res += n-1
                n--
            }
        }
    }
    return res
}

function main(){
    let nums = [1,1,2,2,4,1,1]
    console.log(solution2(nums))
}

main()
