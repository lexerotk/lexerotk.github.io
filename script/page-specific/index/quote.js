const quotes  = [
//    "Embrace Darkness.",
    "I'm sick of this.",
//    "I was the worst punishment for myself! -Necip Fazıl Kısakürek",
    "What am I doing wrong?",
    "I'm tired of this.",
    "There is nothing I can do.",
//    "Overthinking is a torture.",
//    "Am I too naive..?",
//    "Nobody",
//    "No one",
//    "Weirdo",
    "Despair",
    "People are cruel.",
    "Girls. They are just fucking terrible.",
    "When you gonna stop stalking?"
]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log("LOG - Random quote for this page: "+ randomQuote)
document.getElementById("quote").innerHTML = randomQuote;
