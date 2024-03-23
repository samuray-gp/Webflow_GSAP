// titleProject (string)
// screensValue (string)
// screenPrice (num)
// fullPrice (num)
// screenPrice (num)
// Boolean (Bool)



let screenPrice = 10000
let percentage = 10


let titleProject = prompt('Название проекта') 
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями') 
console.log(screensValue);

let responsive = prompt('нужен ли респонсивный сайт?') 
console.log(responsive);

let service1 =  prompt('Какой сервис нужен?') 
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?') 
console.log(servicePrice1);

let service2 =  prompt('Какой еще сервис нужен?') 
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?') 
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice);

let percentResalt = +(fullPrice * (percentage / 100))
console.log(percentResalt);

let servicePercentPrice = fullPrice - percentResalt
console.log(Math.ceil(servicePercentPrice));


if (fullPrice > 50000) {
    console.log('10%');
}  else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log('сделаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('В другой раз повезет');
}

let allServicePrices;

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
}
allServicePrices = getAllServicePrices();
console.log(allServicePrices, "вызвали функцию с суммой всех доп услуг");

function getFullPrice() {
   return allServicePrices + screenPrice
}
fullPrice = getFullPrice();

const getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice
}

servicePercentPrice = getServicePercentPrices();

let newTitleProject = '';
const getTitle = function () {
    return titleProject[0].toUpperCase();
}
newTitleProject = getTitle();