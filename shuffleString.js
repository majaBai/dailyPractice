/*
Given a string s and an integer array indices of the same length.
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.

Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"

Constraints:

s.length == indices.length == n
1 <= n <= 100
s contains only lower-case English letters.
0 <= indices[i] < n
All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).

*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let r = []
    for(let i = 0; i <indices.length; i++){
        r[indices[i]] = s[i]
    }
    return r.join('')
};

function main(){
    let s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
    let r = restoreString(s, indices)
    console.log(r)
}
main()