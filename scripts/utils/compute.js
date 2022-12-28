console.log('加载模块compute.js')
define(function(require, exports, module) {
    'use strict';
    module.exports = {
        add(num1, num2) {
            return num1 + num2
        }
    }
});