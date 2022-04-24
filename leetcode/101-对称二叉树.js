/**

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？

通过次数447,367提交次数790,593

*/

/**
 * 解题思路：
 *
 *  这题解的还是相对比较快的  对二叉树更加理解了
 *
 *  先将一个二叉树 先序遍历 得出先序遍历结构的值
 *                再进行一遍后序遍历  得到后续遍历之后的结果值
 *
 *  这里面有一个细节 是如果我们遍历到节点是 null  则需要将这个null值也作为结果存下来
 *  因为一个树是否对称  不仅要看有值的节点 没有值的节点也需要看
 *
 *  得到两个数组之后 将其中一个数组反转 再对比两个数组所拼接的字符串是否相等即可！
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
var isSymmetric = function (root) {
  let firstOrder = []; // 先序遍历结果
  let afterOrder = []; // 后续遍历结果
  const preorder = (root) => {
    if (root == null) {
      firstOrder.push(root);
      return;
    }
    firstOrder.push(root.val);
    preorder(root.left);
    preorder(root.right);
  };
  const postorder = (root) => {
    if (root == null) {
      afterOrder.push(root);
      return;
    }

    postorder(root.left);
    postorder(root.right);
    afterOrder.push(root.val);
  };
  preorder(root);
  postorder(root);
  return firstOrder.reverse().join("-") === afterOrder.join("-");
};
