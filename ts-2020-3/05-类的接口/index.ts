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
function printLabel(labelObject: {label:string}):void {
  console.log(labelObject.label)
}

printLabel({label: 'hahah'})

// 对批量方法进行约束
/**
 * 1、必须传入对象
 * 2、必须有firstName
 * 3、必须有secondName
 */

interface FullName {
  firstName:string;
  secondName:string;
}

function printName(name:FullName) {
  // 就算采用第一种写法写， 可以多传入一个age属性 但也拿不到
  // console.log(name.firstName + '---' + name.secondName + '--' + name.age)
  console.log(name.firstName + '---' + name.secondName)
}

// 写法1、如果这样写的话 必须要完全匹配 如果没有完全匹配的话就会报错
// printName({
//   age: 12
//   firstName: 'zhao',
//   secondName: 'si'
// })

// 写法2、可以写把对象定义在外面 这样即使包含了就行 不需要完全匹配
let obj = {
  age: 12,
  firstName: '赵',
  secondName: '思'
}

printName(obj)

/**
 * 可选属性接口
 */

interface FullName2 {
  firstName:string;
  // 可选属性 可传可不传
  secondName?:string;
}

function getName(name: FullName) {
  console.log(name)
}

getName({
  firstName: 'zhao',
  secondName: 'si'
})

/**
 * 例如 我要通过这个可选属性接口的特性来实现一个ajax
 */

interface Config {
  type:string;

  url:string;

  data?:string;

  dataType:string;
}

function ajax (config:Config) {
  var xhr = new XMLHttpRequest()

  xhr.open(config.url, 'true')

  xhr.send(config.data)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('成功')
    }
  }
}


/**
 * 2、函数类型接口
 * 对方法传入的参数以继返回值进行约束
 * 
 */

 // 加密的函数类型接口
interface encrypt {
  (key:string, value:string):string;
}

// 此md5函数 应用上这个接口
var md5:encrypt = function(key:string, value:string) {
  return key + value;
}

/**
 * 3、可索引接口
 * 数组、对象的约束
 */


 var arr:number[] = [2, 3]

 var arr2:Array<string> = ['1', '2']

 interface UserArr {
   [index:number]:string
 }

//  这个时候就是约束一个对象了  其索引也必须为字符串
 interface UserObj {
   [index:string]:string
 }

 let arr3:UserArr = ['23', '3434']

//  其索引也必须为字符串
 let arr4:UserObj = {
   name: '赵思',
   age: '16'
 }


 /**
  * 4、类类型约束
  * 
  */

  interface Animal {
    name: string;
    eat(str:string):void
  }
  // 实现接口
  class Dog implements Animal {
    name:string;

    constructor(name:string) {
      this.name = name
    }

    // 必须有eat这个方法
    eat() {

    }
  }

  let d = new Dog('小黑')
  d.eat()


  class Cat implements Animal {
    name:string;

    constructor(name:string) {
      this.name = name
    }

    // 必须有eat这个方法
    eat(food:string):void {
      console.log(this.name + '吃' + food)
    }
  }


  let c = new Cat('小花')

  c.eat('老鼠')


  /**
   * 接口扩展 接口可以继承接口
   */

  interface Animal2 {
    eat ():void;
  }

  interface Person extends Animal2 {
    work():void;
  }

  class Programmer {
    name:string;
    constructor (name:string) {
      this.name = name
    }

    coding (code:string) {
      console.log(this.name + code)
    }
  }

  // 实现接口的类还可以继承某个类
  class Web extends Programmer implements Person {
    name:string;
    constructor (name:string) {
      super(name)
      this.name = name
    }

    eat():void {
      console.log(this.name + '喜欢吃馒头')
    }

    work():void {
      console.log(this.name + '喜欢打代码')
    }
  }

let w = new Web('小龙');

w.work()
w.coding('ts')