{
    /**
     * 使用链表 实现队列
     */
    var Node_1 = /** @class */ (function () {
        function Node() {
        }
        return Node;
    }());
    var Queue = /** @class */ (function () {
        function Queue() {
            this.first = new Node_1(); // 队列头指针
            this.last = new Node_1(); // 队列尾指针
            this.N = 0;
        }
        Queue.prototype.isEmpty = function () {
            return this.N === 0;
        };
        Queue.prototype.size = function () {
            return this.N;
        };
        Queue.prototype.enqueue = function (item) {
            // 入队
            var oldNode = this.last;
            this.last = new Node_1();
            this.last.item = item;
            this.last.next = null;
            if (this.isEmpty()) {
                // 当队列是空的时候 头指针和尾指针是相同的
                this.first = this.last;
            }
            else {
                oldNode.next = this.last;
            }
            this.N++;
        };
        Queue.prototype.dequeus = function () {
            // 出队
            var item = this.first.item;
            this.first = this.first.next;
            this.N--;
            if (this.isEmpty()) {
                // 当队列是空的时候 尾指针指向空
                this.last = null;
            }
            return item;
        };
        return Queue;
    }());
    var queue = new Queue();
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
