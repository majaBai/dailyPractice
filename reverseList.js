/*
Reverse a singly linked list.

Follow up:
A linked list can be reversed either iteratively or recursively. 
Could you implement both?
*/

var reverseList = function (head) {
  if (head == null || head.next == null) return head
  let a = [], cur = head
  while (cur != null) {
    a.push(cur)
    let nxt = cur.next
    cur.next = null
    cur = nxt
  }

  let p = newHead = a[a.length - 1]
  let n = a.length - 2
  while (n >= 0) {
    p.next = a[n]
    p = p.next
    n--
  }

  return newHead
};

function solution2 (head) {
  if (head == null || head.next == null) return head
  let second = head.next
  let rest = solution2(second)
  second.next = head
  head.next = null
  return rest
}

function solution3 (head) {
  if (head == null || head.next == null) return head
  let ordered = null
  let cur = head
  while (cur != null) {
    let nxt = cur.next
    if (ordered == null) {
      ordered = cur
      ordered.next = null
    } else {
      let temp = ordered
      ordered = cur
      ordered.next = temp
    }
    cur = nxt
  }
  return ordered
}

