/*
Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.

Build the target array using the following operations:

Push: Read a new element from the beginning list, and push it in the array.
Pop: delete the last element of the array.
If the target array is already built, stop reading more elements.
Return the operations to build the target array. You are guaranteed that the answer is unique.

 

Example 1:
Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation: 
Read number 1 and automatically push in the array -> [1]
Read number 2 and automatically push in the array then Pop it -> [1]
Read number 3 and automatically push in the array -> [1,3]

1 <= target.length <= 100
1 <= target[i] <= n
1 <= n <= 100
target is strictly increasing.
*/

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let pointer = 0
    let r = []
    for(let i = 1; i <= n; i++){
        if(pointer >= target.length){
            break
        }
        if(target[pointer] === i){
            r.push('Push')
            pointer++
        } else {
            r.push('Push')
            r.push('Pop')
        }
    }
    return r
};

function main(){
    let target = [1,2,3], n = 3
    let r = buildArray(target, n)
    console.log(r)
}

main()