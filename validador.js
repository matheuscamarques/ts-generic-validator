"use strict";
exports.__esModule = true;
var Validador = /** @class */ (function () {
    function Validador() {
        this.message = '';
        this.valid = true;
    }
    Validador.prototype.validate = function (o, keys, message, callables) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!o[key]) {
                this.message = message[key];
                this.valid = false;
                break;
            }
            if (callables[key]) {
                var result = callables[key](o[key]);
                if (!result) {
                    this.message = message[key];
                    this.valid = false;
                    break;
                }
            }
        }
        return this;
    };
    Validador.init = function () {
        return new Validador();
    };
    Validador.prototype.getMessage = function () {
        return this.message;
    };
    Validador.prototype.getValid = function () {
        return this.valid;
    };
    return Validador;
}());
// dados Object 
// array<string>
// 
function validador(o, keys, message, callables) {
    if (message === void 0) { message = {}; }
    if (callables === void 0) { callables = {}; }
    return Validador.init().validate(o, keys, message, callables);
}
exports["default"] = validador;
// Testes
// const obj = {
//     nome: 'Matheus',
//     email: 'matheus@gmail.com',
//     cpf: '10716274906'
// }
// const keys = ['nome', 'email', 'cpf']
// const message: IDicionary<string> = {
//     nome: 'Nome é obrigatório',
//     email: 'Email é obrigatório ou inválido',
//     cpf: 'CPF é obrigatório ou inválido'
// }
// const fnValid: IDicionary<Callable<string, boolean>> = {
//     nome: (nome: string) => {
//         return nome.length > 3;
//     },
//     email: (email: string) => {
//         return regexp_email.test(String(email).toLowerCase());
//     },
//     cpf: cpf
// }
// const val = validador(obj, keys, message, fnValid)
// console.log(val.getMessage(), val.getValid())
