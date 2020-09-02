/*
For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  
For example, if X = 1231, then the array form is [1,2,3,1].
Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

Example 1:
Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000

Note：
1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
If A.length > 1, then A[0] != 0
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, k) {
    let r = []
    let i = A.length-1
    while(i >= 0 || k!=0){
      let el = i < 0? 0: A[i]
      let dig = (k === 0? 0: k%10)
      let sum = el + dig
      r.push(sum%10)
      k = parseInt(k/10) + parseInt(sum/10)
      i--
    }
    return r.reverse()
}


function main(){

  let A = [9,9,9,9,9,9,9,9,9,9], k = 1
  let r = addToArrayForm(A, k)
 r.forEach(item =>{
   console.log(item)
 })
}

main()