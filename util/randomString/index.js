"use strict";
exports.__esModule = true;
/**
 * generate random string
 *
 * @param length string length
 * @param char custom character
 *
 * @return string
 */
var randomString = function (length, char) {
    if (char === void 0) { char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
    var res = '';
    var charLength = char.length;
    for (var i = 0; i < length; i++) {
        res += char.charAt(Math.floor(Math.random() * charLength));
    }
    return res;
};
exports["default"] = randomString;
