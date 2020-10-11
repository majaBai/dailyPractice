/*
Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".

The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.

The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.

Return a List of ListNode's representing the linked list parts that are formed.

Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]


Example:
Input: 
root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
Output: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, 
and earlier parts are a larger size than the later parts.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  let cur = root
  let n = 0
  while (cur != null) {
    cur = cur.next
    n++
  }

  let width = n / k, rem = n % k

  let ans = []
  cur = root
  for (let i = 0; i < k; i++) {
    let h = cur
    for(let j = 0; j < width+(i < rem? 1: 0)-1; j++){
      if (cur != null) cur = cur.next
    }
    if(cur !=null){
      let prev = cur
      cur = cur.next
      prev.next = null
    }
    ans[i] = h
  }
  return ans
};
