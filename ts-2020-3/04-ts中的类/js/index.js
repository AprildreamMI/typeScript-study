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
/********** 类的定义 ******* */
var Person = /** @class */ (function () {
    // 构造函数 数
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    // 方法
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person('赵思');
p.run();
p.setName('赵四');
p.run();
/************* ts 中实现继承 ************ */
var Person1 = /** @class */ (function () {
    // 构造函数
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    // 方法
    Person1.prototype.run = function () {
        console.log('父类的run方法', this.name);
    };
    return Person1;
}());
var p1 = new Person1('赵思');
p1.run();
p1.setName('赵四');
p1.run();
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        // 要调用父类的构造函数
        return _super.call(this, name) || this;
    }
    Web.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8-\u5B50\u7C7B");
    };
    return Web;
}(Person1));
var w = new Web('王五');
w.run();
/************ 类里的修饰符 ************* */
/**
 * 属性如果不加修饰符 默认就是公有 public
 *
 * public： 公有          在类里面，字类，类外面都可以访问
 * protected: 保护类型    在类里面，字类里面可以访问，在类外部无法访问
 * private: 私有          在类里面才可以访问，类外部无法访问
 */
var Person2 = /** @class */ (function () {
    // 构造函数
    function Person2(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.setName = function (name) {
        this.name = name;
    };
    // 方法
    Person2.prototype.run = function () {
        console.log(this.name);
    };
    return Person2;
}());
var p2 = new Person('周武');
// 外部也可以访问 public
console.log('外部可以访问公有的属性的', p2.name);
// 外部无法访问protected
// console.log('外部无法访问保护的属性的', p2.age)
var Web1 = /** @class */ (function (_super) {
    __extends(Web1, _super);
    function Web1(name, age, height, webName) {
        var _this = 
        // 要调用父类的构造函数
        _super.call(this, name, age, height) || this;
        _this.webName = webName;
        return _this;
    }
    Web1.prototype.work = function () {
        // 在字类里可以拿到公共的name
        return this.name + "\u5728\u5DE5\u4F5C";
    };
    Web1.prototype.sayAge = function () {
        return "\u5E74\u9F84\u4E3A: " + this.age;
    };
    Web1.prototype.sayHeight = function () {
        // 属性“height”为私有属性，只能在类“Person2”中访问
        // return `身高为：${this.height}`
        return '属性“height”为私有属性，只能在类“Person2”中访问';
    };
    return Web1;
}(Person2));
var w1 = new Web1('张三', 12, 180, '自己的属性');
w1.run();
console.log('子类可以访问父类的公有属性', w1.work());
console.log('子类可以访问父类的保护属性', w1.sayAge());
