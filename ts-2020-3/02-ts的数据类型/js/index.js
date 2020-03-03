"use strict";
/**
 * ts 中的数据类型
 *
 *  布尔类型(boolean)
 *  数字类型(number)
 *  字符串类型(string)
 *  数组类型（array）
 *  元组类型（tuple）
 *  枚举类型（enum）
 *  任意类型（any）
 *  null 和 undefind
 *  void 类型
 *  never 类型
 *
 */
// 写ts代码时必须指定类型
/**********  boolean   *************** */
var bol = true;
bol = false;
/********** number *************** */
var num = 456;
num = 123;
/*********** 字符串类型 ******* */
var str = 'str';
str = '123';
/************ 数组类型 array ****** */
// 第一种定义数组的方式
var arr = [1, 2, 3];
var arr2 = ['1', '2', '3'];
// 第二种定义数组的方式
var arr3 = [7, 8, 9];
/************** tuple（元组） 类型 ******* */
/**
 * 元组类型属于数组的一种
 *    给数组中的元素每一个位置指定一个类型
 */
var arr4 = [1, '4'];
/*************** 枚举类型（enum) ******** */
/**
 * 在原来用一些数值状态来表示
 *  1 - 已支付
 *  2 - 未支付
 *  3 - 已取消
 * 但是这样的表示不直观
 */
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
var s = Flag.success; // 1
console.log(s);
// 如果枚举类型没有明确赋值的话 使用的是其下标
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 3] = "red";
    Color[Color["origin"] = 4] = "origin";
})(Color || (Color = {}));
var c1 = Color.blue;
console.log(c1);
// 改变了下标 那么 origin 就是4
var c2 = Color.red;
console.log(c2);
// 打印的 4 
var c3 = Color.origin;
console.log(c3);
// 如果枚举类型没有明确赋值的话 使用的是其下标
var Color1;
(function (Color1) {
    Color1[Color1["blue"] = 0] = "blue";
    Color1[Color1["red"] = 3] = "red";
    // 'origin' ok 可以赋值
    Color1["green"] = "green1";
    /**
     * 报错 无法赋值
     *  所以只有上一个赋值为数字下一个的下标才会改变
     *  或者自己主动赋值
     *  origin = '888'
     */
    // 'origin'
})(Color1 || (Color1 = {}));
var c11 = Color1.blue;
console.log(c11);
// 改变了下标 那么 origin 就是4
var c12 = Color1.red;
console.log(c12);
var c13 = Color1.green;
console.log(c13);
/*************  any 任意类型  ************* */
var num2 = 123;
num2 = 'str';
num2 = true;
console.log(num2);
// 任意类型的用处
/**
 * 例如基础类型中美哦与Object类型 可以用any 类型来代替
 */
/*********** null 和 undefined *********** */
var num3;
// 没有赋值
// console.log(num3)
var num4;
// 可以定义多个可能类型 
var num5;
console.log(num5);
/********** void 用于方法没有返回值 表示方法没有返回任何类型 ****** */
function run() {
    console.log(1);
}
function run1() {
    return 123;
}
/******* never类型：其他类型 代表从不会出现的值 *********/
/**
 * never 包含 （null和undefined）类型
 * 意味着never的变量只能被never类型所赋值
 */
var un;
un = undefined;
var null1;
null1 = null;
