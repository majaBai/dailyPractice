/*
Given the head of a singly linked list where elements are sorted in ascending order,
 convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ by more than 1.

Constraints:
The number of nodes in head is in the range [0, 2 * 104].
-10^5 <= Node.val <= 10^5
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head == null || head.next == null) return head
  let mid = findMid(head)

  let node = new TreeNode(mid.val)
  if (head == mid) {
    return node
  }
  node.left = sortedListToBST(head)
  node.right = sortedListToBST(mid.next)
  return node
};

// 从中点切分链表为三部分，分别作为二叉树的 left（head) - root(mid) - right(mid.next)
function findMid (head) {
  let prev = null, slow = fast = head
  while (fast != null && fast.next != null) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  if (prev != null) {
    prev.next = null
  }
  return slow
}
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function solution2 (head) {
  let arr = []
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const constructTree = (low, high) => {
    if (low > high) return null;
    let mid = (low + high) / 2 | 0;
    let node = new TreeNode(arr[mid]);
    node.left = constructTree(low, mid - 1);
    node.right = constructTree(mid + 1, high);
    return node;
  }

  return constructTree(0, arr.length - 1);
}