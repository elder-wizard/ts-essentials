function add (a:number, b:number, show: boolean, slogan: string) {
  const result = a + b

  return show ? slogan + result : result
}

const number = 1 //    same as initiation below

let number2: number
number2 = 5

const result = true

let slogan = 'log: '

// slogan = 1   shows error

console.log(add(number, number2, result, slogan))
