enum Role {ADMIN, ONLY_READ, USER};

const user: {name:string, age:number, stack:string[], salary: [number, string], role: number} = {
  name: 'Vladyslav',
  age: 31,
  stack: ['PHP', 'Pascal'],
  salary: [5000, 'PLN'],
  role: Role.USER
}

const app = new Vue({
  el: '#app',
  data: {
    userName: user.name,
    userAge: user.age,
    userStack: user.stack,
    userSalary: user.salary,
    userRole: user.role
  }
})