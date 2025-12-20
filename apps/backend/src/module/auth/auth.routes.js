"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_js_1 = require("./auth.controller.js");
var authRoutes = (0, express_1.Router)();
authRoutes.post("/register", auth_controller_js_1.default.registerController);
authRoutes.get("/login", auth_controller_js_1.default.loginController);
exports.default = authRoutes;
