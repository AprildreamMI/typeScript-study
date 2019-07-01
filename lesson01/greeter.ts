
class Student {
  fullName: string;
  // 使用public就相当于给this添加了此属性
  constructor(public firstName, public middleInitial, public lastName) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// 创建一个接口 相当于对象类型的约束
interface Person {
  // 使用注解来定义变量类型
  firstName:string,
  lastName:string
}

// 加上类型约束
function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user))