"use strict";
exports.__esModule = true;
exports.User = void 0;
var utils_1 = require("./utils");
var User = /** @class */ (function () {
    function User() {
    }
    User.getMessages = function () {
        return {
            email: 'Email is required or invalid',
            cpf: 'CPF is required or invalid'
        };
    };
    User.keys = function () {
        return ['email', 'cpf'];
    };
    User.validates = function () {
        return {
            email: function (email) { return utils_1.regexp_email.test(String(email).toLowerCase()); },
            cpf: utils_1.cpf
        };
    };
    return User;
}());
exports.User = User;
