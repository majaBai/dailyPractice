/*
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
We repeatedly make duplicate removals on S until we no longer can.
Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

Input: "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 

Note:
1 <= S.length <= 20000
S consists only of English lowercase letters.
*/

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = []
    for(let i = 0; i< S.length; i++){
        let char = S[i]
        if(stack.length === 0){
            stack.push(char)
        } else {
            let top = stack[stack.length-1]
            if(top != char){
                stack.push(char)
            } else {
                stack.pop()
            }
        }
    }
    return stack.join('')
};