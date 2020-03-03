"use strict";
/**
 * 在es5中
 * 静态属性 静态方法
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
/*  function Person () {
   this.run1 = function () {
     console.log('这是es5中的实例方法')
   }
 }

// 这是es5中的静态属性
 Person.v1 = '3'

 Person.run2 = functin () {
  console.log('这是es5中的静态方法')
 } */
/**
 * 在TS中的实例方法和静态方法
 *
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8\uFF0C \u8FD9\u662F\u4E00\u4E2A\u5B9E\u4F8B\u65B9\u6CD5");
    };
    Person.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C\uFF0C \u8FD9\u662F\u4E00\u4E2A\u5B9E\u4F8B\u65B9\u6CD5");
    };
    // 静态方法中无法直接调用普通属性，只能调用静态属性
    Person.print = function () {
        console.log('加上static修饰符 转变为静态方法', this.sex);
    };
    // age:number;
    Person.sex = '男';
    return Person;
}());
// 不需要实例化就可以调用静态方法
Person.print();
var p1 = new Person('赵思');
// 实例化之后才能调用的
p1.run();
p1.work();
/**
 * 多态
 *   + 父类定义一个方法不去实现，让继承他的字类去实现
 *      每一个字类有不同的表现
 *   + 多态属于继承
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // 父类不去实现
    Animal.prototype.eat = function () {
        console.log('吃的方法-(父类)');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return "" + this.name + '吃肉';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return "" + this.name + '吃老鼠';
    };
    return Cat;
}(Animal));
/**
 * 抽象类
 *  + 他是提供其他类继承的基类,不能直接实例化
 *  + 用abstract关键字定义抽象类和抽象方法
 *  + 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 *  + 抽象类和抽象方法用来定义标准
 *      例如: Animal 这个类要求他的字类必须包含eat方法
 *  + 抽象方法只能出现在抽象类中
 */
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    // 其他方法 可以不必实现
    Animal2.prototype.run = function () {
    };
    return Animal2;
}());
/**
* 抽象类的字类 必须实现抽象类里的抽象方法
*/
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Dog2.prototype.eat = function () {
        return this.name + "\u5403\u8089";
    };
    return Dog2;
}(Animal2));
var d1 = new Dog2('小狗');
console.log(d1.eat());
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Cat2.prototype.eat = function () {
        return this.name + "\u5403\u8001\u9F20";
    };
    return Cat2;
}(Animal2));
