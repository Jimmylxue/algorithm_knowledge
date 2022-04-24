{
    /**
     * 写完这题的时候 我对链表已经相对来说比较好理解了！！
     *
     * 这里先是我们自定义一个链表结构：Node 并顺便创建一个链表
     *
     *  创建一个索引 通过递归函数 找到最后一个node节点的前一个节点
     *  将最后一个节点的前一个节点的 next 指向为 null  我们就完成了删除链表中最后一个节点的任务
     *
     *
     *
     */
    var Node_1 = /** @class */ (function () {
        function Node(value, next) {
            this.value = value;
            this.next = next;
        }
        return Node;
    }());
    var node1 = new Node_1('Jimmy');
    var node2 = new Node_1('xuexue');
    var node3 = new Node_1('Jack');
    node1.next = node2;
    node2.next = node3;
    var first = new Node_1(null, node1);
    // 创建一个索引
    var oldIndex_1 = null;
    // 通过递归函数 找到最后一个node节点的前一个节点
    var Inorder_1 = function (root) {
        if (root.next) {
            oldIndex_1 = root;
            Inorder_1(root.next);
        }
    };
    Inorder_1(first);
    console.log('first', first);
    // 将最后一个节点的前一个节点的 next 指向为 null  我们就完成了删除链表中最后一个节点的任务
    oldIndex_1.next = null;
    console.log(first);
}
