/**
 * 功能： 实现一个操作数据库的库 支持 Mysql Mssql MongoDb
 * 
 * 要求： 都有 add update delete get 方法
 * 
 * 注意： 约束同意的规范，以继代码重用
 * 
 * 解决方案
 *  需要约束规范所以需要定义接口
 *  需要代码重用所以需要定义泛型
 * 
 *  1、接口：在面向对象的编程中，接口是一种规范的定义
 *           它定义了行为和动作的规范
 *  2、泛型：泛型就是解决 类 接口 方法的复用性
 * 
 */

 interface DBI<T> {
   add(value: T):boolean
   update(value:T, id:number):boolean
   delete(id:number):boolean
   get(id:number):any[]
 }


 // 要实现泛型接口 类也必须是泛型
 class Mysql<T> implements DBI<T> {
   add(value: T): boolean {
     throw new Error("Method not implemented.");
   }
   update(value: T, id: number): boolean {
     throw new Error("Method not implemented.");
   }
   delete(id: number): boolean {
     throw new Error("Method not implemented.");
   }
   get(id: number): any[] {
     throw new Error("Method not implemented.");
   }

 }


 class Mssql<T> implements DBI<T> {
   add(value: T): boolean {
     throw new Error("Method not implemented.");
   }
   update(value: T, id: number): boolean {
     throw new Error("Method not implemented.");
   }
   delete(id: number): boolean {
     throw new Error("Method not implemented.");
   }
   get(id: number): any[] {
     throw new Error("Method not implemented.");
   }
   
 }

 class User {
   username: string | undefined
   password: string | undefined
 }

 let u = new User()
 u.username = 'zhangsan'
 u.password = '123456'


 let mysql = new Mysql<User>()

 mysql.add(u)