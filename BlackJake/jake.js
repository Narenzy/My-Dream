let firstCard = 3 
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("do you want to draw a new card?")
} else if (sum === 21) {
    console.log("You've got Blackjack!!!")
    hasBlackJack = true
} else   {
    console.log("out of the game")
    isAlive = false
}

console.log(isAlive)