/**

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：true
示例 2：


输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
示例 3：

输入：root = []
输出：true
 

提示：

树中的节点数在范围 [0, 5000] 内
-104 <= Node.val <= 104

*/

/**
 * 二叉树的问题 基本都是一个套路  --  递归解题
 *  这题要的是一个高度平衡的二叉树
 *  每个树的左节点和右节点的高度相差不超过1
 *
 *  所以我们只要算出左节点和右节点的高度 相减计算绝对值 小于等于1 即为平衡二叉树
 *    因为是需求高度平衡 （每个子节点也是平衡二叉树） 所以每个子节点也要判断是不是平衡二叉树（递归）
 *
 *  这里用到了第104题的 二叉树的最大深度 的方法   (有时间一定要看  很容易忘记)
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function getMax(root) {
    // 递归获取树的最大高度
    return !root ? 0 : Math.max(getMax(root.left), getMax(root.right)) + 1;
  }
  if (!root) {
    return true;
  }
  return (
    // 两个子节点高度查小于等于1
    Math.abs(getMax(root.left) - getMax(root.right)) <= 1 &&
    // 子节点也要判断是否是平衡二叉树
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
