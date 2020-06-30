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
