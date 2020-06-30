"use strict";
{
    var _join = function (first, second) { return second; };
    var res = _join(1, '1');
    var res1 = _join(1, '1');
    console.log(res, res1);
}
{
    var c = function (constructor) {
        return constructor;
    };
    var C = (function () {
        function C() {
        }
        return C;
    }());
    var a = c(C);
}
{
    var A = (function () {
        function A(name) {
            this.name = name;
            this.name = name;
        }
        return A;
    }());
    var a = new A('1');
    var name_1 = a.name;
}
{
    var A = (function () {
        function A(person) {
            this.person = person;
            this.person = person;
        }
        return A;
    }());
    new A({ name: 'ts', age: 12 });
}
{
    var A = (function () {
        function A(person) {
            this.person = person;
            this.person = person;
        }
        return A;
    }());
    new A({ name: 'ts', age: 12 });
}
{
}
