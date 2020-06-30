"use strict";
var userArr = [{ name: "name" }];
var person = { name: "1", sex: "男" };
var p = person;
var p2 = {
    name: "p2",
    say: function () {
        return "111";
    },
    say1: function () {
        return { a: "111" };
    },
    propName: "111",
    1: "1",
};
{
    var User1 = (function () {
        function User1() {
            this.name = "hello";
            this.age = 123;
        }
        User1.prototype.say = function () {
            return "hellp";
        };
        return User1;
    }());
}
var fn = function (str) { return +str; };
