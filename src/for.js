let browsers = ['Chrome', 'Mozilla', 'Opera', 'Safari']

for (let key in browsers) {
    console.log(key);
}

for (let index in browsers) {
    console.log(browsers[index]);
}

for (let browser of browsers) {
    console.log(browser);
}

console.log(browsers);