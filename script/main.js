// LAYOUT LOADING
let isMobile;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    isMobile = true;
}
else {
    isMobile = false;
}
console.log("Mobile User: " + isMobile)
if (isMobile) {
    document.getElementsByTagName("head")[0].innerHTML += '<link preload rel="stylesheet" href="/style/mobile.css">'
}
else {
    document.getElementsByTagName("head")[0].innerHTML += '<link preload rel="stylesheet" href="/style/desktop.css">'
}

function fadeInElement(id, delay) {
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('hidden');
            el.classList.add('fadeIn');
        }
    }, delay);
}

for (let i = 1; i <= 16; i++) {
    fadeInElement(`text${i}`, i * 3000 - 1000);
}

fadeInElement('aud', 50000);

setTimeout(() => {
        document.getElementById("aud").play()
}, 50000);
