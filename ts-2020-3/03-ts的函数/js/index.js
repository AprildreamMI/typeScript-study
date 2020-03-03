"use strict";
/**
 * TS 中的函数
 *
 */
/*********** 函数的定义 ********** */
// es5函数声明
function run() {
    return 'run';
}
// 匿名函数
var run2 = function () {
    return 'run';
};
// ts 中定义函数
function run3() {
    return 'run3';
}
// ts 匿名函数
var n1 = function () {
    return 123;
};
/********** ts 中定义方法传参 ******** */
function getInfo(name, age) {
    return name + " ---- " + age;
}
console.log(getInfo('赵思', 22));
/*********** 方法可选参数 配置可选参数 ********* */
// es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样，就需要配置可选参数
function getInfo2(name, age) {
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + " ---- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo2('赵思'));
/*********** 默认参数 ******** */
// es5中无法设置默认参数 es6可以
// 默认参数无法和可选参数同时应用一个参数上
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + " ---- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
/*********** 剩余参数 ********** */
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
// 这样不管要相加多少个参数都可以相加
console.log(sum(1, 2, 3, 4));
function getInfo4(value) {
    if (typeof value === 'string') {
        return "\u6211\u53EB" + value;
    }
    else {
        return "\u5E74\u9F84\u4E3A" + value;
    }
}
console.log(getInfo4('赵思'));
console.log(getInfo4(12));
