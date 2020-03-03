/********** 类的定义 ******* */
class Person {
  // 属性 （省略了public关键词）
  name:string

  // 构造函数 数
  constructor (name:string) {
    this.name = name
  }

  getName():string {
    return this.name
  }

  setName(name:string):void {
    this.name = name
  }

  // 方法
  run():void {
    console.log(this.name)
  }
}


let p = new Person('赵思')

p.run()

p.setName('赵四')

p.run()


/************* ts 中实现继承 ************ */
class Person1 {
   // 属性 （省略了public关键词）
   name:string

   // 构造函数
   constructor (name:string) {
     this.name = name
   }
 
   getName():string {
     return this.name
   }
 
   setName(name:string):void {
     this.name = name
   }
 
   // 方法
   run():void {
     console.log('父类的run方法',this.name)
   }
}


let p1 = new Person1('赵思')

p1.run()

p1.setName('赵四')

p1.run()

class Web extends Person1 {
  constructor(name:string) {
    // 要调用父类的构造函数
    super(name)
  }

  run():void {
    console.log(`${this.name}在运动-子类`)
  }
}

let w = new Web('王五')

w.run()



/************ 类里的修饰符 ************* */
/**
 * 属性如果不加修饰符 默认就是公有 public
 * 
 * public： 公有          在类里面，字类，类外面都可以访问
 * protected: 保护类型    在类里面，字类里面可以访问，在类外部无法访问
 * private: 私有          在类里面才可以访问，类外部无法访问
 */

class Person2 {
  // 属性
  public name:string
  // 保护类型
  protected age:number
  // 私有属性
  private height:number

  // 构造函数
  constructor (name:string, age:number, height:number) {
    this.name = name
    this.age = age
    this.height = height
  }

  getName():string {
    return this.name
  }

  setName(name:string):void {
    this.name = name
  }

  // 方法
  run():void {
    console.log(this.name)
  }
}

let p2 = new Person('周武')
// 外部也可以访问 public
console.log('外部可以访问公有的属性的', p2.name)
// 外部无法访问protected
// console.log('外部无法访问保护的属性的', p2.age)

class Web1 extends Person2 {
  webName:string
  constructor(name:string, age:number, height:number, webName:string) {
    // 要调用父类的构造函数
    super(name, age, height)

    this.webName = webName
  }

  work():string {
    // 在字类里可以拿到公共的name
    return `${this.name}在工作`
  }

  sayAge():string {
    return `年龄为: ${this.age}`
  }

  sayHeight():string {
    // 属性“height”为私有属性，只能在类“Person2”中访问
    // return `身高为：${this.height}`
    return '属性“height”为私有属性，只能在类“Person2”中访问'
  }
}

let w1 = new Web1('张三', 12, 180, '自己的属性')

w1.run()

console.log('子类可以访问父类的公有属性', w1.work())
console.log('子类可以访问父类的保护属性', w1.sayAge())