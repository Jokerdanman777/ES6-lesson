function applyForVisa(documents){
    console.log('Обработка завершена...');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > 0 ? resolve({}) : reject('В визе отказано, сторонник пятой колонны');
            resolve();
            reject();
            resolve();
        }, 2000)  
    });
    return promise;
}

function getVisa(visa){
    console.info('Виза получена')
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(visa), 2000)
    });
}

function bookHotel(visa){
    console.log(visa);
    console.log('Бронируем отель');
    return Promise.resolve(visa)
    }

function buyTickets(booking){
    console.log('Покупаем билеты');
    console.log(booking, "бронь");
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error))
    // .then(()=> console.error('i was here'))