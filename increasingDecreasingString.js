/*
Given a string s. You should re-order the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

Constraints:
1 <= s.length <= 500
s contains only lower-case English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let temp = new Array(26).fill(0)
    let base = 'a'.charCodeAt()
    for(let eachStr of s){
        temp[eachStr.charCodeAt() - base] += 1
    }

    let res = ""
    let count = s.length
    while(count){
        for(let i = 0; i< temp.length; i++){
            let num = temp[i]
            if(num){
                res += String.fromCharCode(i + base)
                temp[i] -= 1
                count--
            }
        }

        for(let j = temp.length-1; j >=0; j--){
            let num = temp[j]
            if(num){
                res += String.fromCharCode(j + base)
                temp[j] -= 1
                count--
            }
        }
    }
    return res
};

function main(){
  let s = "sgo"
  let r = sortString(s)
  console.log(r)
}
main()