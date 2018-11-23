function greet(name) {
    console.log(`hello ${name}`.toUpperCase());
}

greet('Bill');



function createEmail(to, from, subject, message){
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `)
}

createEmail('John@mail.com', 'Jane@mail.com', 'Hello', 'How are you doing')

function add(x, y){
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`)
}

add('2','3')


let name = 'Bill';
console.log(upperName`Hello ${name}`);


function upperName(literals, ...values){
    return literals[0] + values[0].toUpperCase();
}