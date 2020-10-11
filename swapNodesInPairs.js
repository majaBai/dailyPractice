/*
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes. Only nodes itself may be changed.

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
var swapPairs = function (head) {
  if (head == null || head.next == null) return head
  let temp = head
  let newHead = head.next
  while (temp != null) {
    let second = temp.next
    let third = null
    if (second != null) {
      third = second.next
      second.next = temp
    }
    if (third != null && third.next != null) {
      temp.next = third.next
    } else {
      temp.next = third
    }
    temp = third
  }
  return newHead
};