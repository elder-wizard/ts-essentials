// STRING

let string: string = "Bla"

// string = 4; error

// ANY 

let string2: any = "Bla"

// string = 4; no error

// BOOLEAN

let booli: boolean = true

// NUMBER 

let numb: number = 1

// ARRAY 

let strArray: string[] = ['h','e','j']
let numArray: Array<number> = [1,1,2]

// FUNCTIONS

function log(name: string, age: number): void { 
    console.log(`name: ${name}, age: ${age}`)
}

// void - returns nothing

log('Vlad', 1488);

function calc(a: number, b: number | string): number { 
    if (typeof b === 'string') b = +b
    return a + b
}

// "| string" also sring

console.log(calc(2,4))

// CLASSES
// PRIVATE, PUBLIC etc - ACCESS MODIFIERS
class Server {
    static VERSION = '1.0.5'

    private status: string = 'working'

    // public name: string
    // protected ip: number

    // constructor(name: string, ip: number) {
    //     this.name = name
    //     this.ip = ip
    // }
    // AUTO ASSIGN  
    constructor(public name: string, protected ip: number) {
        // this.name = name
        // this.ip = ip
    }


    public turnOn() {
        this.status = 'working'
    }

    protected turnOff() {
        this.status = 'offline'
    }

    public getStatus() {
        return this.status
    }

}

const server: Server = new Server('Aws', 192110)

// OBJECTS

interface UserInterface {
    name: string
    age: number
    logInfo: () => void
    id?: any
}

const user: UserInterface = {
    name: 'Vla',
    age: 22,
    logInfo() {
        console.log(this.name + " " + this.age)
    }
}

interface Fruit {
    sayLol: () => void
}

class Ananas implements Fruit{
    constructor(public name: string, protected ip: number) {
    }

    sayLol() {console.log('LOL')}
    
}