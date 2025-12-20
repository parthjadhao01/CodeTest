"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router_js_1 = require("./router.js");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(router_js_1.default);
app.get("/", function (req, res) {
    res.status(200).json({ message: "Server is running" });
});
app.listen(5001, function () {
    console.log("Server is running on port 5001");
});
