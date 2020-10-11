/*
Given a list of intervals, remove all intervals that are covered by another interval in the list.

Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.


Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  if (intervals.length < 2) return intervals
  intervals.sort((a1, a2) => {
    return a1[0] - a2[0]
  })

  let i = 0
  let pt = i + 1
  let ans = intervals.length

  while (i < intervals.length - 1 && pt < intervals.length) {
    if (intervals[i][0] == intervals[pt][0] || intervals[i][1] >= intervals[pt][1]) {
      intervals[i][1] = Math.max(intervals[i][1], intervals[pt][1])
      intervals[pt] = null
      ans--
      pt += 1
    } else {
      i = pt
      pt += 1
    }
  }

  return ans
};
