/*
Given an array of intervals where intervals[i] = [starti, endi]. 
For each interval i, check if there exists an interval j where startj >= endi, 
which can be called that interval j is on the right of interval i.

For any interval i, you need to store the minimum interval j's index, 
which means that the interval j has the minimum start point to 
build the "on the right of" relationship for interval i. 
If the interval j doesn't exist, store -1 for the interval i. 
Finally, you should return the stored value of each interval as an array.

Example 3:
Input: intervals = [[1,4],[2,3],[3,4]]
Output: [-1,2,-1]
Explanation: There is no satisfied "right" interval for [1,4] and [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point.

Constraints:
1 <= intervals.length <= 2 * 10^4
intervals[i].length == 2
-10^6 <= starti <= endi <= 10^6
The start points of each interval is unique.
*/



/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
//  O(n^2), time 1480ms
var findRightInterval = function(intervals) {
    let r = []
    for(let i = 0; i < intervals.length; i++){
      let minIndx = intervals.length
      let minRight = Number.POSITIVE_INFINITY
      let endi = intervals[i][1]
      for(let j = 0; j < intervals.length; j++){
        if(j === i) continue
        let startj = intervals[j][0]
        if(startj >= endi){
          if(startj < minRight){
            minIndx = j
            minRight = startj
          }
        }
      }
      minIndx = (minIndx === intervals.length? -1 : minIndx)
      r.push(minIndx)
    }
    return r
}

// O(n) + O(n), time 180ms
function solution2(intervals){
  let r = []
  let startj = {}
  for(let i = 0; i < intervals.length; i++){
    let st = intervals[i][0]
    startj[st] = i
  }
  let keys = Object.keys(startj).sort((a, b)=>{
    return Number(a) - Number(b)
  })

  for(let i = 0; i < intervals.length; i++){
    let endi = intervals[i][1]
    let indx = search(keys, endi)
    if(indx >= keys.length){
      r.push(-1)
    } else {
      r.push(startj[keys[indx]])
    }
  }
  return r
}

function search(arr, k){
 // 返回 k 在 arr 中的排位
 return binarySearch(0, arr.length-1, arr, k)
}

function binarySearch(i, j, arr, k){
  while(i <= j){
    let mid = parseInt((i + j)/2)
    if(arr[mid] === k){
      return mid
    } else if(arr[mid] < k){
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
}


function main(){
  let intervals =[[1,12],[2,9],[3,10],[13,14],[15,16],[16,17]]
  let r = findRightInterval(intervals)
  r.forEach(i =>{
    console.log(i)
  })

  let r2 = solution2(intervals)
  r2.forEach(i =>{
    console.log("r2", i)
  })
}

main()