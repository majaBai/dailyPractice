/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list.
 If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head == null || head.next == null || k == 1) return head
  let arr = []
  let cur = head
  while (cur != null) {
    arr.push(cur)
    cur = cur.next
  }

  let group = Math.floor(arr.length / k)
  let i = 1
  let newHead = null
  while (i <= group) {
    let next = null
    if (i * k + k <= arr.length) {
      next = arr[i * k + k - 1]
    } else {
      next = i * k < arr.length ? arr[i * k] : null
    }

    let j
    for (j = i * k - 1; j > (i * k - k); j--) {
      if (newHead == null) {
        newHead = arr[j]
      }
      arr[j].next = arr[j - 1]
    }
    arr[j].next = next

    i++
  }

  return newHead
};