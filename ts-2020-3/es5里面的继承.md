# es5里面的继承

## 对象冒充继承

```javascript
function Person() {
    this.name = '张三'
    this.age = 20
    this.run = function () {
        console.log(this.name + '在运动')
    }
}

Person.prototype.sex = '男'
// 原型链上的方法
Person.prototype.work = function () {
    console.log(this.name + '在工作')
}

function Web() {
    // 对象冒用实现继承
    Person.call(this)
}

let w = new Web()

// 对象冒充可以继承构造函数里面的属性和方法
w.run()

// 对象冒充无法继承原型链上面的属性和方法
// Uncaught TypeError: w.work is not a function
w.work()
```

## 原型链继承

```javascript
function Person() {
    this.name = '张三'
    this.age = 20
    this.run = function () {
        console.log(this.name + '在运动')
    }
}

Person.prototype.sex = '男'
// 原型链上的方法
Person.prototype.work = function () {
    console.log(this.name + '在工作')
}

function Web() {
    
}

// 创建一个实例 挂载到web的原型链上
Web.prototype = new Person();

var w = new Web()

// 可以继承构造函数里面方法
w.run()

// 也可以继承原型链上的方法
w.work()
```

#### 原型链继承的问题

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
    this.run = function () {
        console.log(this.name + '在运动')
    }
}

Person.prototype.sex = '男'
// 原型链上的方法
Person.prototype.work = function () {
    console.log(this.name + '在工作')
}

var p = new Person('李四', 20)

function Web(name, age) {
    
}

// 创建一个实例 挂载到web的原型链上
Web.prototype = new Person();

// name 和 age 没有办法传下去
var w = new Web('赵思', 20)

// 可以继承构造函数里面方法
w.run()

// 也可以继承原型链上的方法
w.work()
```

## 原型链和构造函数组合继承

### 第一种方式

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
    this.run = function () {
        console.log(this.name + '在运动')
    }
}

Person.prototype.sex = '男'
// 原型链上的方法
Person.prototype.work = function () {
    console.log(this.name + '在工作')
}

var p = new Person('李四', 20)

function Web(name, age) {
    Person.call(this, name, age)
}

// 创建一个实例 挂载到web的原型链上
Web.prototype = new Person();

// name 和 age 没有办法传下去
var w = new Web('赵思', 20)

// 可以继承构造函数里面方法
w.run()

// 也可以继承原型链上的方法
w.work()
```

### 第二种方式

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
    this.run = function () {
        console.log(this.name + '在运动')
    }
}

Person.prototype.sex = '男'
// 原型链上的方法
Person.prototype.work = function () {
    console.log(this.name + '在工作')
}

var p = new Person('李四', 20)

function Web(name, age) {
    Person.call(this, name, age)
}

// 创建一个实例 挂载到web的原型链上
Web.prototype = Person.prototype;

// name 和 age 没有办法传下去
var w = new Web('赵思', 20)

// 可以继承构造函数里面方法
w.run()

// 也可以继承原型链上的方法
w.work()
```

