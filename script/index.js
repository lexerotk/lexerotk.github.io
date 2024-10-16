const isMobile = navigator.userAgentData.mobile;
console.log("Mobile User: " + isMobile)
console.log(document.getElementsByClassName("text").length)
if (isMobile==true) {
	for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
		document.getElementsByClassName("text")[i].style.fontSize = "15px";
	}
	for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
		document.getElementsByClassName("title")[i].style.fontSize = "30px";
 }
  document.getElementById("container").style.width = "90%"
	for (let i = 0; i < document.getElementsByClassName("navigationbutton").length; i++) {
		document.getElementsByClassName("navigationbutton")[i].style.fontSize = "13px";
	}
}
