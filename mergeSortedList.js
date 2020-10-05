/*
Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists.

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

const mergeTwoLists = function (l1, l2) {
  if (l1 === null || l2 === null) return l2 === null ? l1 : l2
  let newHead = new ListNode(-111)
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
