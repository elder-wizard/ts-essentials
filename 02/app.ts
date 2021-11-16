let input: unknown

let textInput: string

if (typeof input === 'string') {
  textInput = input
}

function throwError (msg: string, code: number): never {
  throw {
    message: msg,
    errorCode: code
  }
}

throwError('An error here', 500)

