/*
Given a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list.

Return the linked list sorted as well.

example:
Input: 1->1->1->2->3
Output: 2->3
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
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head) {
  let newHead = new ListNode(-1, head)
  let prev = newHead, cur = head
  while (cur) {
    if (cur.next != null && cur.next.val === cur.val) {
      let next = getNext(cur)
      prev.next = next
      cur = next
    } else {
      prev = cur
      cur = cur.next
    }
  }
  return newHead.next
};

function getNext (node) {
  while (node.next != null && node.val === node.next.val) {
    node = node.next
  }
  return node.next
}

//Remove Duplicates from Sorted List 1

function solution (head) {
  if (head == null || head.next === null) return head
  let prev = head
  let cur = head.next
  while (cur) {
    if (cur.val === prev.val) {
      cur = cur.next
    } else {
      prev.next = cur
      cur = cur.next
      prev = prev.next
    }
  }
  prev.next = null
  return head
}