"use strict";
/**
 * 泛型：可以支持不特定的数据类型
 *  软件工程中我们不仅要创建一致的良好的API
 *  同时也要考虑可重用性，组件不经能够支持当前的数据类型
 *  同时也能支持未来的数据类型，这在创建大型系统时提供了
 *  十分灵活的共嗯
 *
 *  在c#和Java这样的语言中，可以使用泛型来创建可重用的组件
 *  一个组件可以支持多种类型的数据，这样用户以自己的数据类型
 *  来使用组件
 *
 *  通俗理解。泛型就是解决类接口方法的复用性，以及对不特定
 *  数据类型的支持
 */
// 此方法只能返回string类型的数据
function getData(value) {
    return value;
}
// 同时返回string类型  和 number 类型
// 存在一个问题在于 any 放弃了类型检查
// 达不到传入什么类型返回什么类型的要求
function getData1(value) {
    return value;
}
/**
 * T 表示泛型（也可以用任何的大写字母。但是要保持一至）
 * 具体是什么类型使是调用这个方法决定的
 * @param value
 */
function getData3(value) {
    return value;
}
getData3(123);
getData3('123456');
/**
 * 泛型类
 *  比如有个最小推算法，需要同时支持返回数字和字符串两种类型
 *  同过类的泛型来实现
 */
// 此方法只能对数字类型进行排序
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(1);
m.add(2);
m.add(3);
// 1
console.log(m.min);
// 通过泛型来实现
var TMinClass = /** @class */ (function () {
    function TMinClass() {
        this.list = [];
    }
    TMinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    TMinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return TMinClass;
}());
// 传入的什么类型就是什么类型
var tm = new TMinClass();
tm.add(1);
tm.add(2);
tm.add(3);
console.log(tm.min());
// 传入的是字符串 则此泛型为字符串
var tm1 = new TMinClass();
tm1.add('a');
tm1.add('b');
tm1.add('c');
console.log(tm1.min());
var setData = function (value1, value2) {
    return value1 + value2;
};
var getData4 = function (value) {
    return value;
};
getData4('123');
getData4(123);
/***
 *
 * 深入泛型类
 */
// 用户类 怕参数为空给个undefined
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// 文章类
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
// 数据库类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    // add 方法只能添加用户类数据 不方便
    MysqlDb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysqlDb;
}());
var u = new User();
u.username = '张三';
u.password = '123456';
var a = new ArticleCate();
a.title = '支点学院';
a.desc = '很多';
a.status = '公开';
var db = new MysqlDb();
db.add(u);
// 可以用泛型来实现MysqlDb
// 让他不单单只能增加单一数据类
var TMysqlDb = /** @class */ (function () {
    function TMysqlDb() {
    }
    TMysqlDb.prototype.add = function (obj) {
        return true;
    };
    return TMysqlDb;
}());
// 可以添加文章类数据
var tMysqlDb = new TMysqlDb();
tMysqlDb.add(a);
// 可以添加用户类数据
var umysql = new TMysqlDb();
umysql.add(u);
