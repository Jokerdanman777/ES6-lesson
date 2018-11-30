// let [js, php, python, ruby] = ['JS', 'PHP', 'Python', 'Ruby'];

// console.log(js, php, python, ruby);

// let scores = [3, 4, [5, 6]];
// let [low, mid, [high, higher]] = scores;
// console.log(low, mid, high,higher)


function computeScore([low, mid]){
    console.log(low, mid);
}

computeScore([3, 4]);


function getScores(){
    return [3, 4, 5]
}

let scores = getScores();
console.log(scores);
let [low, mid, high] = getScores();
console.log(low, mid, high)

let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('Yes is ', yes);
console.log('No is ', no);
console.log('O_o');