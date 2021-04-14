/*
You are given an array of strings words and a string chars.
A string is good if it can be formed by characters from chars (each character can only be used once).
Return the sum of lengths of all good strings in words.

 
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.


Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let comp = new Array(26).fill(0)
    let base = 'a'.charCodeAt(0)
    for(let c of chars){
        comp[c.charCodeAt(0) - base] += 1
    }

    let r = ''
    for(let w of words){
        if(w.length > chars.length) continue
        let isGood = true
        let temp = new Array(26).fill(0)
        for(let i = 0; i< w.length; i++){
            let idx = w.charCodeAt(i) - base
            temp[idx] += 1
            if(comp[idx] === 0 || comp[idx] < temp[idx]){
                isGood = false
                break
            } 
        }
        if(isGood) r += w
    }
   return r.length
};

function main(){
    // let words1 = ['well', 'welllll'], chars1 = "welldonehoneyr"
    // console.log(countCharacters(words1, chars1))

    // let words2 = ['wellnn', 'ooeee'], chars2 = "welldonehoneyr"
    // console.log(countCharacters(words2, chars2))

    // let words3 = ['welldonehoneyr'], chars3 = "welldonehoneyr"
    // console.log(countCharacters(words3, chars3))

    // let words4 = [''], chars4 = "welldonehoneyr"
    // console.log(countCharacters(words4, chars4))

    let words5 = ["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin","ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb","ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl","boygirdlggnh","xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx","nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop","hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx","juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr","lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo","oxgaskztzroxuntiwlfyufddl","tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp","qnagrpfzlyrouolqquytwnwnsqnmuzphne","eeilfdaookieawrrbvtnqfzcricvhpiv","sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz","yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue","hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv","cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo","teyygdmmyadppuopvqdodaczob","qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs","qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"]
    let chars5 = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"
    let r5 = countCharacters(words5, chars5)
    console.log(r5)
}
main()