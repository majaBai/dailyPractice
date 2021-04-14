/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Input: [2,1,2,5,3,2]
Output: 2

Note:

4 <= A.length <= 10000
0 <= A[i] < 10000
A.length is even

*/
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let limit = A.length / 2
    let temp = {}
    for(let num of A){
        temp[num]? temp[num] += 1 : temp[num] = 1
        if(temp[num] === limit){
            return num
        }
    }
    for(let key in temp){
        if(temp[key] === limit){
            return key
        }
    }
}

function main(){
    let a = [5,1,5,2,5,3,5,4]
    console.log(repeatedNTimes(a))
}

main()