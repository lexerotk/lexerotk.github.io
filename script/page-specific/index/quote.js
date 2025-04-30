const quotes  = [
    "Embrace Darkness",
    "I win",
    "Wanna visit TEMPER's Circus? 💀",
    "kys TEMPER :clown:",
    "Metal >>> Vocaloid",
    "Blud thinks she is the villain."
]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log("Random quote for this page: "+ randomQuote)
document.getElementById("quote").innerHTML = randomQuote;
