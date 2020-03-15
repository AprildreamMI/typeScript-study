"use strict";
/**
 * 接口的作用
 * 在面向对象的变成中，接口是一种会犯的定义，它定义了行为和动作的规范，
 * 在程序设计里面，接口起到一种限制和规范的作用
 * 接口定义了某一批类所需要遵守的滚翻，接口不关心这些类的内部状态数据
 * 也不关心这些类里方法的实现细节
 * 它值规定这批类里面必须提供某些方法，提供这些方法的类就可以满足需求
 * tyoescript中的接口类似与java，同时还增加了更灵活的接口类型
 * 包括属性，函数，可缩影和类等
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
/**
 * 1、属性接口
 * 2、函数类型接口
 * 3、可索引接口
 * 4、类类型接口
 * 5、接口扩展
 */
/**
 * 1、属性接口
 *
 * 对json的约束
 */
function printLabel(labelObject) {
    console.log(labelObject.label);
}
printLabel({ label: 'hahah' });
function printName(name) {
    // 就算采用第一种写法写， 可以多传入一个age属性 但也拿不到
    // console.log(name.firstName + '---' + name.secondName + '--' + name.age)
    console.log(name.firstName + '---' + name.secondName);
}
// 写法1、如果这样写的话 必须要完全匹配 如果没有完全匹配的话就会报错
// printName({
//   age: 12
//   firstName: 'zhao',
//   secondName: 'si'
// })
// 写法2、可以写把对象定义在外面 这样即使包含了就行 不需要完全匹配
var obj = {
    age: 12,
    firstName: '赵',
    secondName: '思'
};
printName(obj);
function getName(name) {
    console.log(name);
}
getName({
    firstName: 'zhao',
    secondName: 'si'
});
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.url, 'true');
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('成功');
        }
    };
}
// 此md5函数 应用上这个接口
var md5 = function (key, value) {
    return key + value;
};
/**
 * 3、可索引接口
 * 数组、对象的约束
 */
var arr = [2, 3];
var arr2 = ['1', '2'];
var arr3 = ['23', '3434'];
//  其索引也必须为字符串
var arr4 = {
    name: '赵思',
    age: '16'
};
// 实现接口
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    // 必须有eat这个方法
    Dog.prototype.eat = function () {
    };
    return Dog;
}());
var d = new Dog('小黑');
d.eat();
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    // 必须有eat这个方法
    Cat.prototype.eat = function (food) {
        console.log(this.name + '吃' + food);
    };
    return Cat;
}());
var c = new Cat('小花');
c.eat('老鼠');
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
// 实现接口的类还可以继承某个类
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    Web.prototype.work = function () {
        console.log(this.name + '喜欢打代码');
    };
    return Web;
}(Programmer));
var w = new Web('小龙');
w.work();
w.coding('ts');
