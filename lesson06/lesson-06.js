let screenPrice = 10000
let percentage = 10
let allServicePrices;
let newTitleProject = '';
let RollbackMessage = '';
let titleProject;
let screensValue;
let responsive;




const asking = function () {
titleProject = prompt('Название проекта')    
screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')    
responsive = prompt('нужен ли респонсивный сайт?') 
}




let service1 =  prompt('Какой сервис нужен?') 
let servicePrice1 = +prompt('Сколько это будет стоить?') 
let service2 =  prompt('Какой еще сервис нужен?') 
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?') 





const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
   return allServicePrices + screenPrice
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percentage / 100))
}

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase
}



const getRollbackMessage = function () {
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
}




asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
RollbackMessage = getRollbackMessage();
newTitleProject = getTitle();



console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(Math.ceil(servicePercentPrice));

