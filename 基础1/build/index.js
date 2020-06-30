"use strict";
{
    var Teacher_1 = (function () {
        function Teacher(info) {
            this.info = info;
        }
        Teacher.prototype.getInfo = function (key) {
            return this.info[key];
        };
        return Teacher;
    }());
    var teacher = new Teacher_1({
        name: 'dell',
        age: 18,
        gender: 'male'
    });
    var test = teacher.getInfo('age');
    console.log(test);
}
