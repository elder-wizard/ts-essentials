function add (a: number, b: number): number {
  return a + b
}

function printSum (num: number): void {
  console.log('Result: ' + num)
}

printSum(add(20, 20))

let combine: (a: number, b: number) => number

function handle (a: number, b: number, callback: (c: number) => void) {
  const result = a + b
  callback(result)
}

// combine = printSum error

combine = add

console.log(combine(2, 1))

handle(10, 11, (result) => {
  console.log(result)
})
