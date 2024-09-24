const isMobile = navigator.userAgentData.mobile;
console.log("Mobile User: " + isMobile)
console.log(document.getElementsByClassName("text").length)
if (isMobile==true) {
    document.getElementById("cont").classList.remove("container")
    document.getElementById("cont").classList.add("mcontainer")
	for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
		document.getElementsByClassName("text")[i].style.fontSize = "15px";
	}
	for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
		document.getElementsByClassName("title")[i].style.fontSize = "30px";
	}
	document.getElementById("hi").style.fontSize = "50px";
}