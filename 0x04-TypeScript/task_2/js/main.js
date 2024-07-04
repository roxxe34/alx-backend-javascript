"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = exports.Teacher = exports.Director = void 0;
exports.isDirector = isDirector;
exports.executeWork = executeWork;
exports.teachClass = teachClass;
var Director = /** @class */ (function () {
    function Director() {
        this.getCoffeeBreak = function () { return "Getting a coffee break"; };
        this.workDirectorTasks = function () { return "Getting to director tasks"; };
        this.workFromHome = function () { return "Working from home"; };
    }
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.getCoffeeBreak = function () { return "Cannot have a break"; };
        this.workFromHome = function () { return "Cannot work from home"; };
        this.workTeacherTasks = function () { return "Getting to work"; };
    }
    return Teacher;
}());
exports.Teacher = Teacher;
var createEmployee = function (salary) { return Number(salary) < 500 ? new Teacher() : new Director(); };
exports.createEmployee = createEmployee;
function isDirector(employee) {
    return employee.workDirectorTasks() !== undefined;
}
function executeWork(employee) {
    var res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}
function teachClass(todayClass) {
    return (todayClass === "Math") ? "Teaching Math" : (todayClass === "History") ? "Teaching History" : "".concat(undefined);
}
teachClass('Math');
