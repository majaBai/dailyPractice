/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
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
 * @return {void} Do not return anything, modify head in-place instead.
 */

 // 不符合限制条件
var reorderList = function(head) {
    if(head === null || head.next == null) return head
    let temp = []
    while(head){
        let nxt = head.next
        head.next = null
        temp.push(head)
        head = nxt
    }

    for(let i = 0; i< temp.length; i++){
        if(i % 2 != 0){
            swap(temp, i, length-i)
        }
    }

    for(let i = 0; i<temp.length-1; i++){
        temp[i].next = temp[i+1]
    }

    return temp[0]
};

function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function solution2(head){
    if(head == null || head.next === null) return head
    let mid = getMid(head)
    let trail = reverse(mid.next)
    mid.next = null
    head =  merge(head, trail)
}

function getMid(head){
    let slow = head
    let fast = head.next
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

function reverse(head){
    if(head == null || head.next == null) return head
    let reversed = null
    while(head){
        let nxt = head.next
        head.next = reversed
        reversed = head
        head = nxt
    }
    return reversed
}

function merge(l1, l2){
    let newHead = new ListNode()
    let temp = newHead
    let flag = 1
    while(l1 && l2){
        if(flag === 1){
            temp.next = l1
            l1 = l1.next
            flag = 2
        } else {
            temp.next = l2
            l2 = l2.next
            flag = 1
        }
        temp = temp.next
    }
    if(l1) temp.next = l1
    if(l2) temp.next = l2
    return newHead.next
}