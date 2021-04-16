/*
Given the head of a singly linked list, return true if it is a palindrome.

Input: head = [1,2,2,1]
Output: true

Constraints:
The number of nodes in the list is in the range [1, 10^5].
0 <= Node.val <= 9
 
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let temp = []
    let cur = head
    while(cur){
        temp.push(cur)
        cur = cur.next
    }
   
    for(let i = 0; i< Math.floor(temp.length/2); i++){
        if(temp[i].val != temp[temp.length-1-i].val){
            return false
        }
    }
    return true
};


function solution2(head){
    if(head.next === null) return true
    
    // 找到链表的中点
    let mid = getMid(head)

    // 获取后半段链表
    let t = mid.next
    mid.next = null
    
    // 翻转后半段链表
    let rt = reverse(t)
    let h = head
    while(rt){
        if(rt.val != h.val){
            return false
        }
        rt = rt.next
        h = h.next
    }
    return true
}

function getMid(head){
    let slow = head
    let fast = head.next
    while(fast && fast.next){
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


function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
 }

 function main(){
    let n5 = new ListNode(1, null)
    let n4 = new ListNode(2, n5)
    let n3 = new ListNode(2, n4)
    let n2 = new ListNode(2, n3)
    let n1 = new ListNode(1, n2)

    let r = solution2(n1)
    console.log(r)
 }
 main()