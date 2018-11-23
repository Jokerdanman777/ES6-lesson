'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('hello ' + name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}

createEmail('John@mail.com', 'Jane@mail.com', 'Hello', 'How are you doing');

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add('2', '3');

var name = 'Bill';
console.log(upperName(_templateObject, name));

function upperName(literals) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    return literals[0] + values[0].toUpperCase();
}