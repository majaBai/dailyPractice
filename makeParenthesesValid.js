/*
Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

Example:

Input: "())"
Output: 1

Input: "((("
Output: 3

Note:
S.length <= 1000
S only consists of '(' and ')' characters.
*/


/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let stack = []
    let step = 0
    for(let i = 0; i < S.length; i++){
        if(S[i] === "("){
            stack.push("(")
        } else{
            stack.length === 0? step++ : stack.pop()
        }
    }
    // 如果 S 中的 （ 个数多于 ）的个数，
    // 则 stack.length 不为零，需要添加 ） 使其有效，step 也会相应增加
    return step += stack.length
};