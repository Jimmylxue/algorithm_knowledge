/**

给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

 

示例 1：



输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：



输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：



输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
 

提示：

链表中节点的数目范围是 [0, 104]
-105 <= Node.val <= 105
pos 为 -1 或者链表中的一个 有效索引 。

*/

/**
 * 解法一：
 *  使用 JS 新的数据结构  Map （对标的是数组 里面的元素永远不会重复）
 *    如果是环形链表 那么这个链表在遍历的过程中 它的自身是一定会重复的
 *    所以就是利用这一点  每次遍历就将除了当前元素的自身放进 Map 如果有重复 就说明是一个环形链表！！
 *
 * 解法二：
 *  使用类似快慢指针法，
 *    类似于我们在学校的环形跑道上跑步 ，一个人速度快 一个人速度慢 总有一个时刻两个人会再次相遇
 *    这里的逻辑也是这样 一个一次走两格 一个一次走一格 不断遍历
 *    如果有两个指针相同的时候 说明是环形的链表 否则不是环形链表
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   let map = new Map();
//   while (head) {
//     if (map.has(head)) return true; //如果当前节点在map中存在就说明有环
//     map.set(head, true); //否则就加入map
//     head = head.next; //迭代节点
//   }
//   return false; //循环完成发现没有重复节点，说明没环
// };

var hasCycle = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
};
