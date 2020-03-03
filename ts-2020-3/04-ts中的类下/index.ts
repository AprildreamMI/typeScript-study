/**
 * 在es5中
 * 静态属性 静态方法
 */

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
class Person {
  name:string;
  // age:number;
  static sex:string = '男';

  constructor (name:string) {
    this.name = name
  }

  run () {
    console.log(`${this.name}在运动， 这是一个实例方法`)
  }

  work () {
    console.log(`${this.name}在工作， 这是一个实例方法`)
  }

  // 静态方法中无法直接调用普通属性，只能调用静态属性
  static print() {
    console.log('加上static修饰符 转变为静态方法', this.sex)
  }
}

// 不需要实例化就可以调用静态方法
Person.print()

let p1 = new Person('赵思')

// 实例化之后才能调用的
p1.run()
p1.work()


/**
 * 多态
 *   + 父类定义一个方法不去实现，让继承他的字类去实现
 *      每一个字类有不同的表现
 *   + 多态属于继承 
 */
class Animal {
  name:string;

  constructor (name:string) {
    this.name = name
  }

  // 父类不去实现
  eat () {
    console.log('吃的方法-(父类)')
  }
}

class Dog extends Animal {
  constructor (name:string) {
    super(name)
  }

  eat():string {
    return `${this.name}` + '吃肉'
  }
}

class Cat extends Animal {
  constructor (name:string) {
    super(name)
  }

  eat ():string {
    return `${this.name}` + '吃老鼠'
  }
}

/**
 * 抽象类
 *  + 他是提供其他类继承的基类,不能直接实例化
 *  + 用abstract关键字定义抽象类和抽象方法
 *  + 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 *  + 抽象类和抽象方法用来定义标准
 *      例如: Animal 这个类要求他的字类必须包含eat方法
 *  + 抽象方法只能出现在抽象类中
 */

  abstract class Animal2 {
    name:string;

    constructor (name:string) {
      this.name = name;
    }
    
    // 抽象方法 必须实现 且此方法页不包含具体的实现
    abstract eat():any

    // 其他方法 可以不必实现
    run():void {

    }
  }

  /**
  * 抽象类的字类 必须实现抽象类里的抽象方法
  */
  class Dog2 extends Animal2 {
    constructor (name:string) {
      super(name)
      this.name = name;
    }

    eat():string {
      return `${this.name}吃肉`
    }
  }

  let d1 = new Dog2('小狗');

  console.log(d1.eat())

  class Cat2 extends Animal2 {
    constructor (name:string) {
      super(name)
      this.name = name;
    }

    eat():string {
      return `${this.name}吃老鼠`
    }
  }




