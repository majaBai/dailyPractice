/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((arr1, arr2)=>{
        return arr1[0] - arr2[0]
    })
    let res = []
    for(let i = 0; i < intervals.length; i++){
        if(res.length === 0){
            res.push(intervals[i])
        } else {
            if(res[res.length-1][1] >= intervals[i][0]){
                res[res.length-1][1] = Math.max(intervals[i][1],res[res.length-1][1])
            } else {
                res.push(intervals[i])
            }
        }
    }
    return res
};

function main(){
    let intervals1 = [[1,3],[2,6],[8,10],[15,18]]
    let r1 = merge(intervals1)
    console.log(r1)

    let intervals2 = [[1,3],[3,6]]
    let r2 = merge(intervals2)
    console.log(r2)

    let intervals3 = [[1,3]]
    let r3 = merge(intervals3)
    console.log(r3)

    let intervals4 = [[1,5], [2, 4]]
    let r4 = merge(intervals4)
    console.log(r4)
}
main()