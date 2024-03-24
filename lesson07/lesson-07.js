let screenPrice;
let percentage = 10
let allServicePrices;
let newTitleProject = '';
let RollbackMessage = '';
let titleProject;
let screensValue;
let responsive;
let service1;
let service2;




const checkIsNumber = function(Number) {
    return !isNaN(parseFloat(Number)) && isFinite(Number)
}


const asking = function () {
titleProject = prompt('Название проекта', 'СаЙт Под КЛюч')    
screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями', 'с анимацией')    
responsive = prompt('нужен ли респонсивный сайт?', 'Да') 
    
screenPrice = prompt('Сколько это будет стоить?', 10000)

while (!checkIsNumber(screenPrice) || screenPrice.trim() === "" || screenPrice === null) {   
    screenPrice = prompt('Сколько это будет стоить?', 20000)
    }
    screenPrice = Number(screenPrice)
}



const getAllServicePrices = function() {
    let num = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
         service1 = prompt('Какой сервис нужен?', 'Дизайн')
        }   else if (i === 1) {
            service2 = prompt('Какой еще сервис нужен?', 'Верстка')
        }
        let textFromPromt = '';

while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === "" || textFromPromt === null) {   
    textFromPromt = prompt('Сколько это будет стоить?')
}
        num = num + Number(textFromPromt)
}
return num
}




function getFullPrice() {
   return allServicePrices + screenPrice
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percentage / 100))
}

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}



function getRollbackMessage(price) {
    if (price > 50000) {
        return 'Скидка 10%';
    } else if (price > 20000 && price < 50000) {
        return 'сделаем скидку 5%';
    } else if (price < 20000 && price > 0) {
        return 'скидка не предусмотрена';
    } else if (price < 0) {
        return 'Что-то пошло не так';
    } else if (price === 0 || price === 20000 || price === 50000) {
        return 'В другой раз повезет';
    }
}




asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
RollbackMessage = getRollbackMessage();
newTitleProject = getTitle();



console.log(newTitleProject);
console.log(allServicePrices);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
console.log(getRollbackMessage(fullPrice));

