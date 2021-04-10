/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".


Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 function handleString(s){
    let stack = []
    for(let str of s){
        if(str === '#'){
            if(stack.length){
                stack.pop()
            }
        } else {
            stack.push(str)
        }
    }
    return stack.join('')
}
var backspaceCompare = function(s, t) {
    let s1 = handleString(s)
    let t1 = handleString(t)

    return s1 === t1
};

function main(){
    let s = "ab##", t = "c#d#"
    console.log(backspaceCompare(s, t))
}

main()