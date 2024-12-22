let isMobile;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    isMobile = true;
}
else {
    isMobile = false;
}
console.log("LOG - Mobile User: " + isMobile)
if (isMobile) {
    document.getElementsByTagName("head")[0].innerHTML += '<link rel="stylesheet" href="/style/mobile.css">'
}
else {
    document.getElementsByTagName("head")[0].innerHTML += '<link rel="stylesheet" href="/style/desktop.css">'
}