/*
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.
Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

Example:
Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Note:

S.length <= 10000
S[i] is "(" or ")"
S is a valid parentheses string
*/

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let r = ''
    let stack = []
    for(let char of S){
        if(char === "("){
            if(stack.length){
                r += char
            }
            stack.push(char)
        } else if(char === ")"){
            stack.pop()
            if(stack.length){
                r += char
            }
        }
    }
    return r
};