/*
给定一个二叉树的根节点 root ，返回它的 中序 遍历。
示例 1：


输入：root = [1,null,2,3]
输出：[1,3,2]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：


输入：root = [1,2]
输出：[2,1]
示例 5：


输入：root = [1,null,2]
输出：[1,2]
 

提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100 

进阶: 递归算法很简单，你可以通过迭代算法完成吗？
*/

/**
 *
 * 二叉树的数据结构 每个节点都有 左右两个子节点（子节点有可能为空）
 *
 * 二叉树 遍历方式是有 先序遍历  中序便利  后序便利
 *  因为每个结点在便利的过程中都会被读到三次 所以分别对应的是  第一次读到就存 第二次读到存  第三次读到存
 *
 *  中序遍历  读到第二次的时候就存储下来
 *
 *  我其实 深知遍历的结果 但是用程序写 暂时还是写不出来 也研究了很久 没有搞懂意思 这题答案是看leetcode答案的 不能算 等学会怎么写了再删掉这段话
 *
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
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (root == null) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};

console.log(inorderTraversal([1, null, 2, 3]));
