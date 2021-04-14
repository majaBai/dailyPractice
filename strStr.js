/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let limit = needle.length
    if(limit === 0) return 0
    // 注意 i 的边界，i < haystack.length - limit + 1
    for(let i = 0; i < haystack.length - limit + 1; i++){
        let j = i
        let val = ''
        while(j < i + limit){
            val += haystack[j]
            j++
        }
        if(val === needle){
            return i
        }
    }
    return -1
};

function solution2(haystack, needle){
    if(needle.length === 0) return 0
    for(let i = 0; i < haystack.length - needle.length + 1; i++){
        let j = 0
        for(; j < needle.length; j++){
            if(needle[j] != haystack[i+j]){
                break
            }
        }
        if(j === needle.length) return i
    }
    return -1
}

function main(){
    let h1 = "hello", n1 = "ll"
    let r1 = solution2(h1, n1)
    console.log(r1)

    let h2 = "aaaaa", n2 = "bba"
    let r2 = solution2(h2, n2)
    console.log(r2)

    let h3 = "", n3 = "a"
    let r3 = solution2(h3, n3)
    console.log(r3)

    let h4 = "w", n4 = ""
    let r4 = solution2(h4, n4)
    console.log(r4)
}
main()