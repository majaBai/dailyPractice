/*
Given a string s, return the first non-repeating character in it and return its index. 
If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0

Input: s = "aabb"
Output: -1

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj ={}
    for(let i = 0; i<s.length; i++){
        if(!obj[s[i]]){
            obj[s[i]] = {}
            obj[s[i]].count = 1
            obj[s[i]].idx = i
        } else {
            obj[s[i]].count +=1
        }
    }
    
    let res = {
        idx: Number.MAX_VALUE,
    }
    for(let key in obj){
        if(obj[key].count === 1 && obj[key].idx < res.idx){
            res = obj[key]
        }
    }
    return res.idx === Number.MAX_VALUE? -1 : res.idx
};

function main(){
    let s = "leetcode"
    console.log(firstUniqChar(s))
}
main()