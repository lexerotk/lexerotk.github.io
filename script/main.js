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

// ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

function fadeTo(url) {
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");
  
    setTimeout(() => {
        location.href = url;
    }, 500); 
}