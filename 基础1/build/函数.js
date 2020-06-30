"use strict";
var fn1 = function (str) {
    return +str;
};
var fn2 = function (str) {
    return +str;
};
var resFn1 = fn1("1");
var resFn2 = fn2("2");
console.log(resFn1, resFn2);
var fn3 = function () { };
var fn4 = function () {
    throw new Error();
};
var fn5 = function (_a) {
    var _b = (_a === void 0 ? { name: "1" } : _a).name, name = _b === void 0 ? "2" : _b;
    console.log(name);
};
fn5();
