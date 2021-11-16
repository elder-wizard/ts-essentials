// STRING
var string = "Bla";
// string = 4; error
// ANY 
var string2 = "Bla";
// string = 4; no error
// BOOLEAN
var booli = true;
// NUMBER 
var numb = 1;
// ARRAY 
var strArray = ['h', 'e', 'j'];
var numArray = [1, 1, 2];
// FUNCTIONS
function log(name, age) {
    console.log("name: " + name + ", age: " + age);
}
// void - returns nothing
log('Vlad', 104808);
function calc(a, b) {
    if (typeof b === 'string')
        b = +b;
    return a + b;
}
// "| string" also sring
console.log(calc(2, 4));
// CLASSES
// PRIVATE, PUBLIC etc - ACCESS MODIFIERS
var Server = /** @class */ (function () {
    // public name: string
    // protected ip: number
    // constructor(name: string, ip: number) {
    //     this.name = name
    //     this.ip = ip
    // }
    // AUTO ASSIGN  
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working';
        // this.name = name
        // this.ip = ip
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.5';
    return Server;
}());
var server = new Server('Aws', 192110);
var user = {
    name: 'Vla',
    age: 22,
    logInfo: function () {
        console.log(this.name + " " + this.age);
    }
};
var Ananas = /** @class */ (function () {
    function Ananas(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    Ananas.prototype.sayLol = function () { console.log('LOL'); };
    return Ananas;
}());
