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

 /**
  * 类装饰器
  *   类装饰器在声明之前被声明（紧靠着类声明）
  *   类装饰器应用与类构造函数，可以用来监视，修改或特换类定义
  *   传入一个参数
  * 
  */

  // 类装饰器
  function logClass(params:any) {
    // params 就是当前类
    console.log(params)

    // 可以扩展所装饰类的属性等等
    params.prototype.apiUrl = 'xxxx'
    params.prototype.run= function () {
      console.log('执行')
    }
  }

  // 这是无参的装饰器
  @logClass
  class HttpClient {
    constructor () {

    }

    getData():void {

    }
  }

  let h:any = new HttpClient()


  // xxxxx
  console.log(h.apiUrl)
  // 执行
  h.run()



  /**
   * 装饰器工厂
   *    可以传入参数
   */

  // params 是接受的参数 不是当前类
  function logClass2 (params:any) {
  //  target 才是当前类
    return function (target:any) {
      console.log('接收的参数', params)
      console.log('当前类', target)

      target.prototype.apiUrl = params
    }
  }


  @logClass2('https://yoyohr.com')
  class HttpClient2 {
    constructor () {

    }

    getData () {

    }
  }

  let h1:any = new HttpClient2()

  console.log(h1.apiUrl)

  /**
  * 类装饰器
  *   可以重载构造函数
  *   类装饰器表达式会在运行时当作函数被调用
  *     类的构造函数作为其唯一的参数
  *   如果类装饰器返回一个值，它会使提供的构造函数来替换类的声明
  */

  function logClass3(target:any) {
    // 继承默认传入的类
    return class extends target {
      apiUrl:any = '我是修改后的apiUrl'

      getData () {
        this.apiUrl = this.apiUrl + '........'
        console.log(this.apiUrl)
      }
    }
  }
  

  @logClass3
  class HttpClient3 {
    apiUrl:string | undefined
    constructor () {
      this.apiUrl = '我是构造函数里面的apiUrl'
    }

    getData() {
      console.log('未重置的getData', this.apiUrl)
    }
  }


  let h3 = new HttpClient3()

  h3.getData()






  
  /**
   * 属性装饰器
   *  属性装饰器表达式会在运行是当作函数被调用，传入下列2个参数
   *    1、对于静态成员来说，是类的构造函数
   *        对于实例成员来说，是类的原型对象
   *    2、成员的名字
   */

    function logProperty (params:any) {
      console.log('传入的值', params)
      return function(target:any, attr:any) {
        console.log('对于实列成员是类的原型对象', target)
        console.log('应用属性装饰器的参数名', attr)

        target[attr] = params
      }
    }

    @logClass
    class Property {

      @logProperty('https://yoyohr.comP')
      url:string | undefined
      constructor() {

      }


      getData () {
        console.log(this.url)
      }
    }

    let p = new Property()
    p.getData()



