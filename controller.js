"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var validador_1 = require("./validador");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.createUser = function () {
        var req = {
            body: {
                email: "matheus@gmail.com",
                cpf: "10716274906"
            }
        };
        var request = (0, validador_1["default"])(req.body, model_1.User.keys(), model_1.User.getMessages(), model_1.User.validates());
        if (!request.getValid()) {
            console.log(request.getMessage());
            return;
        }
        // code continues here
        console.log("user created");
    };
    return Controller;
}());
Controller.createUser();
