"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
require("../css/style.scss");
var $ = require("../../node_modules/jquery/dist/jquery.js");
require("./../js/app.js");
$(function () {
    var user = new user_1.User();
    user.sayHi();
    $('div').append("<p>do it</p>");
    console.log(test);
});
//# sourceMappingURL=app.js.map