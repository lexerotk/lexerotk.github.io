const quotes  = [
    "Embrace Darkness.",
    "Removed proxy detection."
]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log("Random quote for this page: "+ randomQuote)
document.getElementById("quote").innerHTML = randomQuote;
