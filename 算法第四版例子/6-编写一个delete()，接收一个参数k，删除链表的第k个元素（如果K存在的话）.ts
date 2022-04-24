{
  /**
   * 这个也是链表的一个简单题目， 删除指定的第N个
   *  只需要找到第N个的前面一个  然后通过 item.next = item.next.next
   *  这种方式就可以成功去掉中间的这个元素的引用关系！！！
   *
   *  这个就是单项链表：
   *    单向链表这种数据结构显然是有存在问题的：
   *    如果我们要获取第N个元素 就必须从头开始遍历获取
   *    所以时间复杂度是 随着 链表的长度的变大而变大的
   *    解决方案就是双向链表！！！
   */
  class Node<T> {
    value: T;
    next: Node<T>;
    constructor(value: T, next?: Node<T>) {
      this.value = value;
      this.next = next;
    }
  }

  let node1 = new Node<String>('Jimmy');
  let node2 = new Node<String>('xuexue');
  let node3 = new Node<String>('Jack');
  let node4 = new Node<String>('YJ');
  let node5 = new Node<String>('TT');
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  let first = new Node(null, node1);

  function deleteOne(k: number) {
    let i = 0;
    let Index = null;
    const Inorder = (root: Node<String>) => {
      if (root.next && i < k) {
        Index = root;
        i++;
        Inorder(root.next);
      }
    };
    Inorder(first);
    Index.next = Index.next.next;
    console.log(Index, 'index');
    console.log('first', first);
    /**
     * Node {
        value: null,
        next: Node { value: 'Jimmy', next: Node { value: 'Jack', next: [Node] } }
      }

      成功删除了 xuexue 这个节点
     */
  }
  deleteOne(2);
}
