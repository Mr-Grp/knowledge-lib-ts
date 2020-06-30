"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonClass = (function () {
    function PersonClass() {
        this.name = "TS";
    }
    PersonClass.prototype.getName = function () {
        return this.name;
    };
    return PersonClass;
}());
var person1 = new PersonClass();
var TeacherClass = (function (_super) {
    __extends(TeacherClass, _super);
    function TeacherClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.teacher = "Teacher";
        _this.name = "11";
        return _this;
    }
    TeacherClass.prototype.getTeacher = function () {
        return this.teacher;
    };
    return TeacherClass;
}(PersonClass));
var t = new TeacherClass();
console.log(t.getName());
console.log(t.getTeacher());
var Teacher1Class = (function (_super) {
    __extends(Teacher1Class, _super);
    function Teacher1Class() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.teacher = "Teacher";
        return _this;
    }
    Teacher1Class.prototype.getName = function () {
        return this.teacher;
    };
    return Teacher1Class;
}(PersonClass));
var t1 = new Teacher1Class();
console.log(t1.getName());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.teacher = "Teacher";
        return _this;
    }
    Teacher.prototype.getName = function () {
        return _super.prototype.getName.call(this) + this.teacher;
    };
    return Teacher;
}(PersonClass));
var t2 = new Teacher();
console.log(t2.getName());
var PersonC = (function () {
    function PersonC(name) {
        this.name = name;
    }
    return PersonC;
}());
var PersonC1 = (function () {
    function PersonC1(name) {
        this.name = name;
    }
    return PersonC1;
}());
var PersonGetter = (function () {
    function PersonGetter(_name) {
        this._name = _name;
    }
    Object.defineProperty(PersonGetter.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = "name:" + value;
        },
        enumerable: false,
        configurable: true
    });
    return PersonGetter;
}());
var personGetter = new PersonGetter("TS");
console.log(personGetter.name);
personGetter.name = "nemo";
console.log(personGetter.name);
var PersonSingle = (function () {
    function PersonSingle() {
    }
    PersonSingle.getInstance = function () {
        if (PersonSingle.instance) {
            return PersonSingle.instance;
        }
        return (PersonSingle.instance = new PersonSingle());
    };
    return PersonSingle;
}());
var pS = PersonSingle.getInstance();
var pS1 = PersonSingle.getInstance();
console.log(pS === pS1);
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "1";
        return _this;
    }
    Cat.prototype.getName = function () {
        return this.name;
    };
    return Cat;
}(Animal));
