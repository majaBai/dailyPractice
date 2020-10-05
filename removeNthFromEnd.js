/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

Follow up: Could you do this in one pass?

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
 * @param {number} n
 * @return {ListNode}
 */

// two-pass
var removeNthFromEnd = function (head, n) {
  let len = getLength(head)
  if (n < 1 || n > len) return null
  let i = len - n
  if (i === 0) {
    let next = head.next
    head = next
  } else {
    let cur = head
    while (true) {
      if (i === 1) break
      cur = cur.next
      i--
    }
    let remove = cur.next
    let next = remove.next
    remove.next = null
    cur.next = next
  }
  return head
}

const getLength = function (head) {
  let len = 0
  let cur = head
  while (cur != null) {
    len++
    cur = cur.next
  }
  return len
}

// one-pass, two pointer
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const solutioni2 = function (head, n) {
  let newHead = new ListNode(-1)
  newHead.next = head
  let slow = (fast = newHead)
  while (n > 0) {
    fast = fast.next
    n--
  }

  while (fast.next != null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return newHead.next
}
