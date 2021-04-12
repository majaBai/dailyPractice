/*
Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

Example:
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

Constraints:

1 <= s.length <= 5 * 105
s consists of English letters and digits.
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {}
    for(let i= 0; i< s.length; i++){
        if(!obj[s[i]]){
            obj[s[i]] = {}
            obj[s[i]].count = 1
            obj[s[i]].val = s[i]
        } else {
            obj[s[i]].count += 1
            obj[s[i]].val += s[i]
        }
    }
    let temp = []
    let r = ''
    for(let key in obj){
        temp.push(obj[key])
    }
    temp.sort((item1, item2)=> item2.count - item1.count )
    for(let item of temp){
        r += item.val
    }
    return r
};

function main(){
    let s = "cccaaa"
    let r =  frequencySort(s)
    console.log(r)
}
main()