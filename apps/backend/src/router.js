"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_routes_js_1 = require("./module/auth/auth.routes.js");
var router = (0, express_1.Router)();
router.post("/", function (req, res) {
    console.log("We are in post request of the server");
    res.status(200).send("post request succeded and router tested succefully");
});
router.use("/auth", auth_routes_js_1.default);
exports.default = router;
