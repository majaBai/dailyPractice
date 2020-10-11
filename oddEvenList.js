/*
Given a singly linked list, group all odd nodes together followed by the even nodes. 
Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. 
The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head == null || head.next == null || head.next.next == null) return head
  let odd = head
  let even = evenstart = head.next
  while (even != null) {
    let nxt = even.next
    if (nxt != null && nxt.next != null) {
      even.next = nxt.next
    } else {
      even.next = null
    }
    odd.next = nxt
    even = even.next
    if (odd.next != null) {
      odd = odd.next
    }
  }

  odd.next = evenstart
  return head
};