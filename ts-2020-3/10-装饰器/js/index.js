"use strict";
/***
 * 装饰器
 *  装饰器是一种特殊类型的声明，它能够被附加到类声明
 *    方法，属性或参数上，可以修改类的行为
 *  通俗的讲，装饰器就是一个方法，可以注入到类，方法，属性
 *    或参数上来扩展类，属性，方法，参数的功能
 * 常见的装饰器有： 类装饰器，属性装饰器，方法装饰器，参数装饰器
 * 装饰器的写法：普通装饰器（无法传参），装饰器工厂（可传参）
 *
 * 装饰器是过去纪念中js最大的成就之一，已是ES7的标准特性之一
 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 类装饰器
 *   类装饰器在声明之前被声明（紧靠着类声明）
 *   类装饰器应用与类构造函数，可以用来监视，修改或特换类定义
 *   传入一个参数
 *
 */
// 类装饰器
function logClass(params) {
    // params 就是当前类
    console.log(params);
    // 可以扩展所装饰类的属性等等
    params.prototype.apiUrl = 'xxxx';
    params.prototype.run = function () {
        console.log('执行');
    };
}
// 这是无参的装饰器
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var h = new HttpClient();
// xxxxx
console.log(h.apiUrl);
// 执行
h.run();
/**
 * 装饰器工厂
 *    可以传入参数
 */
// params 是接受的参数 不是当前类
function logClass2(params) {
    //  target 才是当前类
    return function (target) {
        console.log('接收的参数', params);
        console.log('当前类', target);
        target.prototype.apiUrl = params;
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () {
    };
    HttpClient2 = __decorate([
        logClass2('https://yoyohr.com')
    ], HttpClient2);
    return HttpClient2;
}());
var h1 = new HttpClient2();
console.log(h1.apiUrl);
/**
* 类装饰器
*   可以重载构造函数
*   类装饰器表达式会在运行时当作函数被调用
*     类的构造函数作为其唯一的参数
*   如果类装饰器返回一个值，它会使提供的构造函数来替换类的声明
*/
function logClass3(target) {
    // 继承默认传入的类
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '我是修改后的apiUrl';
            return _this;
        }
        class_1.prototype.getData = function () {
            this.apiUrl = this.apiUrl + '........';
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
        this.apiUrl = '我是构造函数里面的apiUrl';
    }
    HttpClient3.prototype.getData = function () {
        console.log('未重置的getData', this.apiUrl);
    };
    HttpClient3 = __decorate([
        logClass3
    ], HttpClient3);
    return HttpClient3;
}());
var h3 = new HttpClient3();
h3.getData();
/**
 * 属性装饰器
 *  属性装饰器表达式会在运行是当作函数被调用，传入下列2个参数
 *    1、对于静态成员来说，是类的构造函数
 *        对于实例成员来说，是类的原型对象
 *    2、成员的名字
 */
function logProperty(params) {
    console.log('传入的值', params);
    return function (target, attr) {
        console.log('对于实列成员是类的原型对象', target);
        console.log('应用属性装饰器的参数名', attr);
        target[attr] = params;
    };
}
var Property = /** @class */ (function () {
    function Property() {
    }
    Property.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logProperty('https://yoyohr.comP')
    ], Property.prototype, "url", void 0);
    Property = __decorate([
        logClass
    ], Property);
    return Property;
}());
var p = new Property();
p.getData();
