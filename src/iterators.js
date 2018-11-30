// let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// console.info('for');
// for (let index = 0; index < xmen.length; index++) {
//     console.log(xmen[index]);
// }

// console.info('for...in');
// for (let key in xmen){
//     console.log(xmen[key]);
// }

// console.info('for...of');
// for(let xman of xmen){
//     console.log(xman);
// }

// let iterator = xmen[Symbol.iterator]();

// next = iterator.next();
// while(!next.done){
//     console.log(next.value);
//     next = iterator.next();
// }

// let randomGenerator = {
//     generate() {
//         return this[Symbol.iterator]();
//     },

//     [Symbol.iterator]() {
//         let count = 0;

//         return {
//             next(){
//                 let value = Math.ceil(Math.random() * 100);
//                 let done = count > 9;
//                 count += 1;
//                 return { value, done }
//             }
//         }
//     }
// };

// for (let random of randomGenerator){
//     console.log(random);
// }

// let random = randomGenerator.generate();
// console.log(random.next().value, "BOOM");

class ArrayIterator {
    constructor(array){
        this.array = array.map(item => item).sort();
        this.index = 0;
    }
    next(){
        let result = {value: undefined, done: true};
        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index++;
        }
        return result;
    }
}

class TaskList {
    constructor(){
        this.tasks = [];
    }
    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator](){
        return new ArrayIterator(this.tasks)
    }
}

let taskList = new TaskList();
taskList.addTasks('Learn JS', 'Learn ES6', 'Buy Mac');
for ( let task of taskList) {
    console.log(task);
}


