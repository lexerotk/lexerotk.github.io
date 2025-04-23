const quotes  = [
    "Embrace Darkness",
    "I win lol",
    'I wonder what does the button "???" do',
    "Fuck you TEMPER :clown:",
    "Metal >>> Vocaloid Songs",
    "Who is depressed 🤠"
]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log("LOG - Random quote for this page: "+ randomQuote)
document.getElementById("quote").innerHTML = randomQuote;
