let add = (x, y) =>x + y;

let square = x => x*x;

let giveMeAnswer = () => 42;

let log = () => console.log('Hello');

let multiply = (x, y) => {
    let result = x * y;
    return result;
};

// IIFE
(() =>  { console.log('IDI NAH')
})();

let getPerson = () =>  ({name: 'John'});

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach((num) => sum += num);

let squared = numbers.map( (n) => n * n );

let person = {
    name: 'Ball',
    greate: function() {
        window.setTimeout( () => {
            console.log(`Hello, where are your balls, ${this.name}`);
            console.log(this);
        }, 2000)
        
    }
};
person.greate();