'use strict';

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLamguages = ['JavaScript', 'PHP', 'Ruby'];
var languages = [].concat(staticLanguages, dynamicLamguages, ['C#', 'Python']);

(_console = console).log.apply(_console, _toConsumableArray(languages));

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);