var FixedCapacityStackOfString = /** @class */ (function () {
    function FixedCapacityStackOfString(number) {
        this.str = [];
        this.N = 0;
        this.MaxSize = 0;
        this.MaxSize = number;
    }
    FixedCapacityStackOfString.prototype.size = function () {
        // 返回栈的大小
        return this.N;
    };
    FixedCapacityStackOfString.prototype.isEmpty = function () {
        return this.N === 0;
    };
    FixedCapacityStackOfString.prototype.push = function (cap) {
        console.log('???', this.N, this.MaxSize);
        if (this.N < this.MaxSize) {
            this.str[this.N++] = cap;
            return true;
        }
        else {
            return false;
        }
    };
    FixedCapacityStackOfString.prototype.pop = function () {
        return this.str[--this.N];
    };
    return FixedCapacityStackOfString;
}());
var s = new FixedCapacityStackOfString(3);
s.push('Jimmy');
s.push('xuexue');
s.push('Jack');
s.push('Lin');
console.log('size', s.size());
console.log(s.pop()); // Jack
console.log(s.pop()); // xuexue
console.log(s.pop()); // Jimmy
