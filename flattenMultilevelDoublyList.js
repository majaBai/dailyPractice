/*
You are given a doubly linked list which in addition to the next and previous 
pointers, it could have a child pointer, which may or may not point to a separate 
doubly linked list. These child lists may have one or more children of their own,
and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. 
You are given the head of the first level of the list.

*/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (head == null) return head;
  let p = head
  while (p != null) {
    if (p.child == null) {
      p = p.next;
      continue;
    }
    let temp = p.child
    while (temp.next != null) {
      temp = temp.next
    }
    temp.next = p.next
    if (p.next != null) {
      p.next.prev = temp
    }
    p.next = p.child
    p.child.prev = p
    p.child = null
  }
  return head
};


// recursion

function flatten (head) {
  _flatten(head)
  return head
}

function _flatten (node) {
  if (node == null) return null
  let child = node.child, nxt = node.next
  let childLast = _flatten(child), nxtLast = _flatten(nxt)
  node.child = null
  if (childLast != null) {
    node.next = child
    child.prev = node
    node = childLast
  }

  if (nxtLast != null) {
    node.next = nxt
    nxt.prev = node
    node = nxtLast
  }
  return node
}

