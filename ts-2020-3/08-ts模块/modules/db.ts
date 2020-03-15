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

export {
  Mysql,
  Mssql
}