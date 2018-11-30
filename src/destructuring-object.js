let person = {
    id: 1,
    firstName: 'John',
    lastName: 'Bill'
};
let user = {
    firstName: 'jake',
    lastName: 'Douson',
    social: {
        facebook: 'JohnDow',
        twitter: 'Billy'
        }};

// let {firstName: first, lastName: last, social: {facebook: fb, twitter}} = user;

// console.log(fb, twitter);


// function post(url, {data: {firstName, lastName}, cache}){
//     console.log(firstName, lastName);
// }
// let result = post('api/fucked', {data: user, cache: false});



function getUserInfo(){
    return {
        firstName: 'jake',
    lastName: 'Douson',
    social: {
        facebook: 'JohnDow',
        twitter: 'Billy'
        }
    }
}


let {firstName, lastName, social: {twitter}} = getUserInfo();
console.log(firstName, lastName, twitter);