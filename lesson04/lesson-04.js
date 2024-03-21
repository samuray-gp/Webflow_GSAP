// titleProject (string)
// screensValue (string)
// screenPrice (num)
// fullPrice (num)
// screenPrice (num)
// Boolean (Bool)


let titleProject = 'Оценка строимости'
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями'
let screenPrice = 500
// let fullPrice = 1000
let service1 = 'дизайн'
let service2 = "разработка"
let responsive = true
let servicePrice1 = 8500
let servicePrice2 = 10000
// let percentage = 10



prompt('Название проекта?') 
console.log(titleProject);

prompt('Типы экранов?') 
console.log(screensValue);

prompt('нужен ли респонсивный сайт?') 
console.log(responsive);

prompt('Какой сервис нужен?') 
console.log(service1);

prompt('Сколько это будет стоить?') 
console.log(servicePrice1);

prompt('Какой еще сервис нужен?') 
console.log(service2);

prompt('Сколько будет стоить этот второй сервис?') 
console.log(servicePrice2);


let fullPrice = screenPrice + servicePrice1 + servicePrice2

let percentage = fullPrice / 100 * 10
console.log(percentage);
let servicePercentPrice = fullPrice - percentage
console.log(servicePercentPrice);

if (fullPrice > 50000) {
    console.log('10%');
}  else {
    console.log('сделаем скидку 5%');
}  

if (fullPrice = 50000) {
    console.log('сделаем скидку 7%');
}  


if (fullPrice > 20000) {
    console.log('сделаем скидку 5%');
} else {
    console.log('скидка не предусмотрена');
}  

if (fullPrice = 20000) {
    console.log('сделаем скидку 2%');
}  

if (fullPrice < 0) {
    console.log('Что то пошло не так');
} 

if (fullPrice = 0) {
    console.log('Не сегодня');
} 
    
