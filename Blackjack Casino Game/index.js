
// pass in argument

let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false

let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

function renderGame() {
    cardsEL.textContent = "Cards : "

    for(let i = 0 ; i < cards.length ; i+=1) {
        cardsEL.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum : " + sum
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohhooo!, You have got Blackjack!!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }    
    messageEL.textContent = message
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {

    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {
    let randoNum = Math.floor(Math.random() * 13) + 1

    if(randoNum > 10) {
        return 10
    } else if(randoNum === 1) {
        return 11
    } else {
        return randoNum
    }
}
