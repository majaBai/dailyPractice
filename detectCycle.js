/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?
*/

// O(n) + O(n)
function detectCycle (head) {
  let a = [], cur = head
  while (cur != null) {
    // a.includes => O(n^2)
    if (a.includes(cur)) {
      return cur
    }
    a.push(cur)
    cur = cur.next
  }
  return null
}

function solution2 (head) {
  let set = new Set(), cur = head
  while (cur != null) {
    // set.has => O(1), 时间相较于 array 减少三分之一
    if (set.has(cur)) {
      return cur
    }
    set.add(cur)
    cur = cur.next
  }
  return null
}

function solution3 (head) {
  if (head == null || head.next == null) return null
  let slow = head, fast = head.next
  // fast 的速度是 slow 的两倍
  while (slow != fast && fast != null) {
    slow = slow.next
    fast = fast.next ? fast.next.next : null
  }
  if (fast == null) return null
  //此时 slow 和 fast 在环内相遇
  let cycleLength = 0
  do {
    slow = slow.next
    fast = fast.next.next
    cycleLength += 1
  } while (slow != fast)
  //此时 slow 和 fast 在坏内再次相遇，slow 走的步数就是环的长度 cycleLength
  let sp = fp = head
  while (cycleLength > 0) {
    fp = fp.next
    cycleLength--
  }
  // sp 与 fp 间的步数差为环长
  while (sp != fp) {
    sp = sp.next
    fp = fp.next
  }
  // 当 sp 与 fp 首次相遇时（sp 刚进入环，fp 刚跑完一圈环，因为 sp 与 fp 间距为环长），相遇点即为环开头
  return sp
}