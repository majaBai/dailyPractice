/*
You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.

Constraints:
0 <= s.length <= 1000
t.length == s.length + 1
s and t consist of lower-case English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s.length == 0) return t
    let total_s = 0
    let total_t = 0
    for(let char of s){
        total_s += char.charCodeAt(0)
    }
    for(let char of t){
        total_t += char.charCodeAt(0)
    }
    return String.fromCharCode(total_t-total_s)
};

function main(){
    let  s = "aa", t = "aac"
    console.log(findTheDifference(s, t))
}
main()