"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["ONLY_READ"] = 1] = "ONLY_READ";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
;
var user = {
    name: 'Vladyslav',
    age: 31,
    stack: ['PHP', 'Pascal'],
    salary: [5000, 'PLN'],
    role: Role.USER
};
var app = new Vue({
    el: '#app',
    data: {
        userName: user.name,
        userAge: user.age,
        userStack: user.stack,
        userSalary: user.salary,
        userRole: user.role
    }
});
//# sourceMappingURL=obj-arr-enum.js.map