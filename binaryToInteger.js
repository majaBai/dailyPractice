/*Given head which is a reference node to a singly-linked list. 
The value of each node in the linked list is either 0 or 1. 
The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Constraints:
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
*/

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let r = '', cur = head
  while (cur != null) {
    r += cur.val
    cur = cur.next
  }

  let integer = parseInt(r, 2)
  return integer
};