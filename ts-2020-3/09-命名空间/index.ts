/**
 * 命名空间
 *    在代码量较大的情况下，为了避免各种变量相冲突
 *    可将相似功能的函数、类、接口等放置到命名空间内
 *    同Java的包，Net的命名空间一样
 *    TypeScript的命名空间可以将代码包裹起来，只对外
 *    暴露需要在外部访问的对象，命名空间内的对象通过export
 *    
 * 命名空间和模块的区别
 *    命名空间：内部模块，主要用于组织代码，避免命名冲突
 *    模   块：ts的外部模块的简称，侧重代码的复用，
 *             一个模块里可能会有多个命名空间
 * 
 */


 // 暴露此命名空间
 export namespace A {
   interface Animal {
     name:string
     eat():void
   }


   export class Dog implements Animal {
     name:string
     constructor (name:string) {
       this.name = name
     }

     eat():void {
       console.log(this.name + '在吃狗粮')
     }
   }

   export class Cat implements Animal {
     name:string
     constructor (name:string) {
       this.name = name
     }

     eat():void {
       console.log(this.name + '吃猫粮')
     }
   }

 }

 let d = new A.Dog('狗')

 d.eat()