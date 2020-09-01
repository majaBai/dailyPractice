/*
Given a Binary Search Tree and a target number, 
return true if there exist two elements in the BST such that their sum is equal to the given target.
Example 1:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
*/

function TreeNode(val, left, right){
  this.val = (val === undefined? 0 : val)
  this.left = (left===undefined? null: left)
  this.right=(right === undefined? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function findTarget(root, k){
  let set = new Set()
  return find(root, k, set)
}

// time: O(n) => traverse the entire tree
// space: o(n) => size of Set()
function find(root, k, set){
  if(root === null) return false;
  if(set.has(k-root.val)) return true;
  set.add(root.val)
  return find(root.left, k, set) || find(root.right, k, set)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
// O(n) + O(n)
function findTarget2(root, k){
  let arr = []
  inorder(root, arr)
  // arr is sorted
  if(arr.length < 2) return false
  let i = 0, j = arr.length-1
  let sum = arr[i] + arr[j] 
  while(sum != k){
    sum > k? j--:i++
    if(i >= j) return false
    sum = arr[i] + arr[j]
  }
  return true
}

/**
 * @param {TreeNode} root
 * @param {array} arr
 */
function inorder(root, arr){
  if(root == null) return
  inorder(root.left, arr)
  arr.push(root.val)
  inorder(root.right, arr)
}


function main(){


}

main()