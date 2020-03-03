/**
 * TS 中的函数
 * 
 */
/*********** 函数的定义 ********** */

// es5函数声明
function run () {
  return 'run'
}

// 匿名函数
var run2 = function () {
  return 'run'
}

// ts 中定义函数
function run3 ():string {
  return 'run3'
}

// ts 匿名函数
let n1 = function():number {
  return 123
}

/********** ts 中定义方法传参 ******** */
function getInfo(name:string, age:number):string {
  return `${name} ---- ${age}`
}

console.log(getInfo('赵思', 22));


/*********** 方法可选参数 配置可选参数 ********* */
// es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样，就需要配置可选参数

function getInfo2(name:string, age?:number):string {
  if (age) {
    return `${name} ---- ${age}`
  } else {
    return `${name} ---- 年龄保密`
  }
}
console.log(getInfo2('赵思'))

/*********** 默认参数 ******** */
// es5中无法设置默认参数 es6可以
// 默认参数无法和可选参数同时应用一个参数上
function getInfo3(name:string, age:number=20):string {
  if (age) {
    return `${name} ---- ${age}`
  } else {
    return `${name} ---- 年龄保密`
  }
}

/*********** 剩余参数 ********** */
function sum(...result:number[]):number {
  let sum = 0;
  for(let i = 0; i < result.length; i++) {
    sum+=result[i]
  }

  return sum
}

// 这样不管要相加多少个参数都可以相加
console.log(sum(1, 2, 3, 4))

/*********** ts 中的函数重载  同样的方法 传入的参数不同 实现的功能不同 ****** */
// ts 中的函数重载需要去判断参数类型
function getInfo4(name:string):string
function getInfo4(age:number):number
function getInfo4(value:any):any {
  if (typeof value === 'string') {
    return `我叫${value}`
  } else {
    return `年龄为${value}`
  }
}

console.log(getInfo4('赵思')) 
console.log(getInfo4(12))




