const quotes  = [
    "Embrace Darkness.",
    "I love coding.",
    "I don't regret anything I did.",
    "A visitor???",
    "Just call me lex or lexer."
]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log("Random quote for this page: "+ randomQuote)
document.getElementById("quote").innerHTML = randomQuote;
