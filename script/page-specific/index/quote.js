const quotes  = [
    "Embrace Darkness.",
    "To trust or not to trust.",
    "I'm sick of this.",
    "I was the worst punishment for myself! -Necip Fazıl Kısakürek",
    "When is this gonna end..?",
    "What am I doing wrong?",
    "terrible creatures...",
    "I'm tired of this.",
    "I'm fed up.",
    "There is nothing I can do.",
    "Overthinking is a torture."
]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log("LOG - Random quote for this page: "+ randomQuote)
document.getElementById("quote").innerHTML = randomQuote;
