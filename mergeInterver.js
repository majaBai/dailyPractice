/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function solution2 (intervals) {
  if (intervals.length < 2) return intervals
  intervals.sort((a1, a2) => {
    return a1[0] - a2[0]
  })
  let ans = []

  for (let t of intervals){
    let len = ans.length
    if(len == 0 || ans[len-1][1] < t[0]){
      ans.push(t)
    } else {
      ans[len-1][1] = Math.max(ans[len-1][1], t[1])
    }
  }
  
  return ans
}


var merge = function (intervals) {
  if (intervals.length < 2) return intervals
  intervals.sort((a1, a2) => {
    return a1[0] - a2[0]
  })

  let j = 0
  let pr = j + 1
  while (j < intervals.length - 1 && pr < intervals.length) {
    if (intervals[j][1] >= intervals[pr][0]) {
      intervals[j][1] = Math.max(intervals[pr][1], intervals[j][1])
      intervals[pr] = null
      pr++
    } else {
      j = pr
      pr++
    }
  }

  let ans = []
  for (let i of intervals) {
    if (i != null) {
      ans.push(i)
    }
  }

  return ans
};


