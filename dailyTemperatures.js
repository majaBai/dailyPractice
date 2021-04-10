/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example:
given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73]
your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. 
Each temperature will be an integer in the range [30, 100].

*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let temp = {}
    let stack = []
    let r = []
    for(let i = 0 ; i< T.length; i++){
        if(stack.length === 0){
            stack.push(T[i])
            r[i] = 0
            // 有可能有重复的 T[i]，这样 temp 的 key 会重复
            temp[T[i]]? temp[T[i]].push(i) : temp[T[i]] = [i] 
        } else {
            if(stack[stack.length - 1] < T[i]){
                while(stack.length > 0 && stack[stack.length - 1] < T[i]){
                    let idx = temp[stack[stack.length - 1]].pop()
                    r[idx] = i - idx
                    stack.pop()
                }
            }
            stack.push(T[i])
            r[i] = 0
            temp[T[i]]? temp[T[i]].push(i) : temp[T[i]] = [i]
        }
    }
    return r
};

function main(){
    let t = [89,62,70,58,47,47,46,76,100,70]
    let r = dailyTemperatures(t)
    console.log(r)

}
main()