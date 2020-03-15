import { Mysql } from './db'

class User {
  username: string | undefined
  password: string | undefined
}

let userModel = new Mysql<User>()

export {
  User,
  userModel
}