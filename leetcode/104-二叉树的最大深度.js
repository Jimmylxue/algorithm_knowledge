/**

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

*/

/**
 * 这道题是一道 非常典型的 深度优先搜索 问题
 *  我们可以通过递归的方式 计算得出结果
 *
 *  比如：
 *    第一层的深度 等于第二层的深度+1 第二层的深度等于第三层的深度+1 ..... （入栈）
 *    所以我们就不断的往下
 *    当得到有一层的深度是0 也就是这一层没有子节点的时候说明到头了 这时候再网上一层层的计算（出栈）
 *
 *    会发现这个过程是一个栈的过程
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
 * @return {number}
 */
var maxDepth = function (root) {
  /**
   * 深度优先搜索算法
   * 整个是一个递归的流程逻辑
   *  第一层的深度 等于第二层的深度+1 第二层的深度等于第三层的深度+1 ....
   *  最后一层的深度为0  再反向计算得出最高层的深度
   */
  return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
