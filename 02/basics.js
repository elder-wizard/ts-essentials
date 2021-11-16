"use strict";
function add(a, b, show, slogan) {
    var result = a + b;
    return show ? slogan + result : result;
}
var number = 1; //    same as initiation below
var number2;
number2 = 5;
var result = true;
var slogan = 'log: ';
// slogan = 1   shows error
console.log(add(number, number2, result, slogan));
