'use strict';

var add = function add(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};

var log = function log() {
    return console.log('Hello');
};

var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};

// IIFE
(function () {
    console.log('IDI NAH');
})();

var getPerson = function getPerson() {
    return { name: 'John' };
};

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

numbers.forEach(function (num) {
    return sum += num;
});

var squared = numbers.map(function (n) {
    return n * n;
});

var person = {
    name: 'Ball',
    greate: function greate() {
        var _this = this;

        window.setTimeout(function () {
            console.log('Hello, where are your balls, ' + _this.name);
            console.log(_this);
        }, 2000);
    }
};
person.greate();