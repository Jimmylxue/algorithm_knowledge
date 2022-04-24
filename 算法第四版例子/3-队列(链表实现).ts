{
  /**
   * 使用链表 实现队列
   */

  class Node<T> {
    public item: T;
    public next: Node<T>;
  }

  class Queue<T> {
    private first: Node<T> = new Node(); // 队列头指针
    private last: Node<T> = new Node(); // 队列尾指针
    private N: number = 0;
    public isEmpty(): boolean {
      return this.N === 0;
    }
    public size(): number {
      return this.N;
    }
    public enqueue(item: T): void {
      // 入队
      let oldNode = this.last;
      this.last = new Node<T>();
      this.last.item = item;
      this.last.next = null;
      if (this.isEmpty()) {
        // 当队列是空的时候 头指针和尾指针是相同的
        this.first = this.last;
      } else {
        oldNode.next = this.last;
      }
      this.N++;
    }
    public dequeus() {
      // 出队
      let item = this.first.item;
      this.first = this.first.next;
      this.N--;
      if (this.isEmpty()) {
        // 当队列是空的时候 尾指针指向空
        this.last = null;
      }
      return item;
    }
  }

  let queue = new Queue<String>();
  console.log(queue.isEmpty());
  queue.enqueue('hello');
  queue.enqueue('world');
  queue.enqueue('Jimmy');
  console.log(queue.isEmpty());
  console.log(queue.size());
  console.log('out', queue.dequeus());
  console.log('out', queue.dequeus());
  console.log('out', queue.dequeus());
  // queue.dequeus();
  // queue.dequeus();
  console.log(queue.size());
}
