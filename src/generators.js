let numbers = {
    *range(start, end) {
        let current = start;
        while(current <= end) {
            yield current++;
        }
    }
}

for (let num of numbers.range(1, 10)) {
    console.log(num);
}
 
// console.log(typeof generate);
// let iterator = generate();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// function generate(){
//     let current = 1;
//     console.log('Start');
//     return {
//         [Symbol.iterator](){
//             return {
//                 next(){
//                     let result = {value: undefined, done: true}
//                     if (current <= 3){
//                         result.value = current;
//                         result.done = false;
//                         current++;
//                     } else {
//                         result.value = undefined;
//                         result.done = true;
//                         console.log('Finish');
//                     }
//                     return result;
//                 }
//             }
//         }
//     }
// }
// let iterator = generate()[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());