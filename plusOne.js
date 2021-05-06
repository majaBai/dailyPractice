/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.
Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length-1
    let reminder = 1
    while(n >= 0){
        let sum = digits[n] + reminder
        reminder = Math.floor(sum / 10)
        if(sum < 10) {
            digits[n] = sum
            break
        } else {
            digits[n] = sum % 10
            n--
        }
    }
    if(reminder > 0){
        digits.unshift(reminder)
    }
    return digits
};

function main(){
    let t1 = [1,2,3]
    let r1 = plusOne(t1)
    console.log(r1)

    let t2 = [9,9,9]
    let r2 = plusOne(t2)
    console.log(r2)

    let t3 = [9]
    let r3 = plusOne(t3)
    console.log(r3)

    let t4 = [0]
    let r4 = plusOne(t4)
    console.log(r4)

    let t5 = [4, 2, 3,1]
    let r5 = plusOne(t5)
    console.log(r5)
}
main()