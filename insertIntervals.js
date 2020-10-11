/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (newInterval.length < 2) return intervals
  intervals.push(newInterval)
  intervals.sort((a1, a2) => {
    return a1[0] - a2[0]
  })

  let ans = merge(intervals)

  return ans
};

function merge (intervals) {
  if(intervals.length < 2) return intervals
  let ans = []
  for (let t of intervals) {
    let len = ans.length
    if (len == 0 || ans[len - 1][1] < t[0]) {
      ans.push(t)
    } else {
      ans[len - 1][1] = Math.max(ans[len - 1][1], t[1])
    }
  }

  return ans
}