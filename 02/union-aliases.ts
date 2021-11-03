type ConvertType = 'number' | 'string';
type Combine = number | string;

function combine (a: Combine, b: Combine, convert?: ConvertType) {
  let result: string | number

  switch (true) {
    case convert === 'string':
      result = a.toString() + b.toString()
      break
    case convert === 'number':
      result = +a + +b
      break
    case typeof a === 'number' && typeof b === 'number':
      result = +a + +b
      break
    default: result = a.toString() + b.toString()
  }

  return result
}

console.log(combine(1, 2, 'string'))

console.log(combine('1', '2', 'number'))

console.log(combine('Vlad', ' Chocolate'))
