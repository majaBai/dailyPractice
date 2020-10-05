/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

example:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Constraints:
k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
*/

const mergeTwoLists = function (l1, l2) {
  if (l1 == null || l2 == null) return l1 == null ? l2 : l1
  let newHead = new ListNode(-1)
  let h = newHead
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      h.next = l1
      l1 = l1.next
    } else {
      h.next = l2
      l2 = l2.next
    }
    h = h.next
  }

  if (l1 != null) {
    h.next = l1
  }
  if (l2 != null) {
    h.next = l2
  }

  return newHead.next
}

const mergeKLists = function (lists) {
  if (lists.length === 0) return null

  let interval = 1
  while (interval < lists.length) {
    for (let i = 0; i + interval < lists.length; i = i + interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval])
    }
    interval *= 2
  }
  return lists[0]
}
