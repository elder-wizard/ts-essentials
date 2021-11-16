"use strict";
var input;
var textInput;
if (typeof input === 'string') {
    textInput = input;
}
function throwError(msg, code) {
    throw {
        message: msg,
        errorCode: code
    };
}
throwError('An error here', 500);
//# sourceMappingURL=app.js.map