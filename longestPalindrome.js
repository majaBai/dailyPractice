/*
Given a string s which consists of lowercase or uppercase letters, 
return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
 
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let temp = {}
    for(let char of s){
        temp[char]? temp[char]++ : temp[char] = 1
    }

    let mid = 0
    let len = 0
    for(key in temp){
        if(temp[key] === 1){
            mid = 1
        } else {
            if(temp[key]%2 === 0){
                len += temp[key]
            } else {
                len += temp[key] - 1
                mid = 1
            }
        }
    }
    return mid? len + 1: len    
};

function main(){
    let s = "ccccc"
    console.log(longestPalindrome(s))
}
main()