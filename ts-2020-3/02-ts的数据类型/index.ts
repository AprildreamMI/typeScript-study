/**
 * ts 中的数据类型
 * 
 *  布尔类型(boolean)
 *  数字类型(number)
 *  字符串类型(string)
 *  数组类型（array）
 *  元组类型（tuple）
 *  枚举类型（enum）
 *  任意类型（any）
 *  null 和 undefind
 *  void 类型
 *  never 类型
 * 
 */

 // 写ts代码时必须指定类型

/**********  boolean   *************** */

var bol:boolean = true

bol = false

/********** number *************** */
var num:number = 456
num = 123


/*********** 字符串类型 ******* */

let str:string = 'str'
str = '123'

/************ 数组类型 array ****** */

// 第一种定义数组的方式

var arr:number[] = [1, 2, 3]

var arr2:string[] = ['1', '2', '3']

// 第二种定义数组的方式

var arr3:Array<number> = [7, 8, 9]


/************** tuple（元组） 类型 ******* */
/**
 * 元组类型属于数组的一种
 *    给数组中的元素每一个位置指定一个类型
 */

let arr4:[number, string] = [1, '4'];


/*************** 枚举类型（enum) ******** */
/**
 * 在原来用一些数值状态来表示
 *  1 - 已支付
 *  2 - 未支付
 *  3 - 已取消
 * 但是这样的表示不直观
 */

 enum Flag {
   success = 1,
   error = 0
 }

 let s:Flag = Flag.success  // 1

 console.log(s)

// 如果枚举类型没有明确赋值的话 使用的是其下标
enum Color {
  blue,
  red = 3,
  'origin'
}

var c1:Color = Color.blue
console.log(c1)


// 改变了下标 那么 origin 就是4
let c2:Color = Color.red
console.log(c2)


// 打印的 4 
var c3 = Color.origin
console.log(c3)

// 如果枚举类型没有明确赋值的话 使用的是其下标
enum Color1 {
  blue,
  red = 3,
  // 'origin' ok 可以赋值
  green = 'green1',
  /**
   * 报错 无法赋值
   *  所以只有上一个赋值为数字下一个的下标才会改变
   *  或者自己主动赋值
   *  origin = '888'
   */
  // 'origin'
}

var c11:Color1 = Color1.blue
console.log(c11)


// 改变了下标 那么 origin 就是4
let c12:Color1 = Color1.red
console.log(c12)

let c13:Color1 = Color1.green
console.log(c13)

/*************  any 任意类型  ************* */

let num2:any = 123
num2 = 'str'
num2 = true
console.log(num2)


// 任意类型的用处
/**
 * 例如基础类型中美哦与Object类型 可以用any 类型来代替
 */

/*********** null 和 undefined *********** */
var num3:number
// 没有赋值
// console.log(num3)

let num4:undefined

// 可以定义多个可能类型 
let num5:number | undefined | null
console.log(num5)

/********** void 用于方法没有返回值 表示方法没有返回任何类型 ****** */
function run():void {
  console.log(1)
}

function run1():number {
  return 123
}

/******* never类型：其他类型 代表从不会出现的值 *********/
/**
 * never 包含 （null和undefined）类型
 * 意味着never的变量只能被never类型所赋值
 */

 var un:undefined
 un = undefined

 var null1:null
 null1 = null
 
 



