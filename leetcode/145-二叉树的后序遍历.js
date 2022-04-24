/**

给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

*/

/**
 * 二叉树遍历问题 用递归可以很轻松的解决
 *  先序 - 中序 - 后续 都是一个套路即可解决
 *  这个代码其实可以简单的记下来的  非常的精准
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = [];
  const inOrder = (root) => {
    if (!root) {
      return;
    }
    inOrder(root.left);
    inOrder(root.right);
    res.push(root.val);
  };
  inOrder(root);
  return res;
};
