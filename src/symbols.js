// let password = Symbol('password')
// let user = {
//     username: 'R2-D2',
//     [password]: 'C3PO',
//     password: 'adidas'
// };
// console.log(user.password);
// console.log(Object.keys(user));
// console.log(Object.getOwnPropertyNames(user));

// console.log(Object.getOwnPropertySymbols(user))

let object = {
    iterator: 0,
    [Symbol.iterator]() {}
}