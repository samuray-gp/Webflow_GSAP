'use strict'

const gameBotFunction = function () {
    function randomGenerate(min, max) {
        let random = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(random)
}
  let mysteryNumber = randomGenerate(1, 100)
  let answerNumber = ''
  let tries = 2

    const IsNumber = function (number) {
        return !isNaN(parseFloat(number)) && isFinite(number)
    }
    
    return function getResult() {
        answerNumber = prompt('Угадайте число от 0 до 100')

        if (answerNumber === null) {
            alert('Вы завершили игру')
            return
        }
  
        while (!IsNumber(answerNumber) || answerNumber.trim() === "") {
            alert('Вы ввели не номер:')
            answerNumber = prompt('Угадайте число от 0 до 100')
           
        }
    
        answerNumber = Number(answerNumber)

        if (mysteryNumber > answerNumber) {
            alert('загаданное число больше' + 'Осталось попыток:' + tries)
        } else if (mysteryNumber < answerNumber) {
            alert('загаданное число меньше' + 'Осталось попыток:' + tries)
        } else if (mysteryNumber === answerNumber) {
            const isNewGame = confirm('Поздравляю с победой! Начать заново?')
            if (isNewGame) {
                tries = 2
                mysteryNumber = randomGenerate(1, 100)
            } else {
                tries = 0
            }

        }
             
        if (tries > 0) {
            tries--
            getResult();
        } else {
            const startAgain = confirm('Попыток больше нет. Начать заново?')
            if (startAgain) {
                tries = 2
                getResult();
            } else {
                alert('Вы закончили игру')
                return
            }
        }
    }

}
let startGameBot = gameBotFunction();
startGameBot();