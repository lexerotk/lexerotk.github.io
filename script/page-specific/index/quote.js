const quotes  = [
    "Embrace Darkness.",
    "Trust is the key of friendships.",
    "Fuck you TEMPER :clown:"
]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log("LOG - Random quote for this page: "+ randomQuote)
document.getElementById("quote").innerHTML = randomQuote;
