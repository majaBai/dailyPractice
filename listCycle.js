/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again
by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Follow up:
Can you solve it using O(1) (i.e. constant) memory?

*/

function ListNode (val, next) {
  this.val = val
  this.next = next
}

const hasCycle = function (head) {
  if (head == null || head.next == null) return false
  let slow = head, fast = head.next
  while (fast != null) {
    slow = slow.next
    fast = fast.next ? fast.next.next : null
    if (slow == fast) {
      return true
    }
  }
  return false
}

