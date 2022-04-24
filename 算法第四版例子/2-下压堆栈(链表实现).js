/**
 * 上个栈的例子是使用 数组实现的
 *  这个例子使用链表实现 栈
 */
{
    var Nodee_1 = /** @class */ (function () {
        function Nodee() {
        }
        return Nodee;
    }());
    var Stack = /** @class */ (function () {
        function Stack() {
            this.N = 0; // 栈的数量
        }
        Stack.prototype.isEmpty = function () {
            return this.N === 0;
        };
        Stack.prototype.push = function (item) {
            var oldNode = this.first;
            this.first = new Nodee_1();
            this.first.item = item;
            this.first.next = oldNode;
            this.N++;
        };
        Stack.prototype.pop = function () {
            var itenm = this.first.item;
            this.first = this.first.next;
            this.N--;
            return itenm;
        };
        Stack.prototype.size = function () {
            return this.N;
        };
        return Stack;
    }());
    var Jimmy = new Stack();
    Jimmy.push('hello');
    Jimmy.push('world');
    // Jimmy.push(22); // 使用泛型 放多类型使用
    console.log(Jimmy.size()); //2
    console.log(Jimmy.pop()); //world
    console.log(Jimmy.pop()); //hello
    console.log(Jimmy.isEmpty()); // true
}
