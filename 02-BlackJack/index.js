let firstCard =  9
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

function startGame(){
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum

if (sum <= 20){
    message = "Do you want to draw another card 🙂"
    
} else if (sum === 21){
    message = "You Win!!!😄"
    hasBlackJack = true
    
} else{
    message = "You Lose!!!🥲 "
    isAlive = false
}

console.log(message)
messageEl.textContent = message

}

function newCard(){
    //console.log("Draw New card")
    let card = 1
    sum = sum + card
    renderGame()

}