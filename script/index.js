const isMobile = navigator.userAgentData.mobile;
console.log("Mobile User: " + isMobile)
if (isMobile==true) {
	// TEXT SIZE
	for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
		document.getElementsByClassName("text")[i].style.fontSize = "15px";
	}

	// TITLE SIZE
	for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
		document.getElementsByClassName("title")[i].style.fontSize = "30px";
 	}

	// NAVIGATION BAR TEXT SIZE
	for (let i = 0; i < document.getElementsByClassName("navigationbutton").length; i++) {
		document.getElementsByClassName("navigationbutton")[i].style.fontSize = "14px";
	}

	// NAVIGATION BUTTON PADDING
	for (let i = 0; i < document.getElementsByClassName("navigationbutton").length; i++) {
		document.getElementsByClassName("navigationbutton")[i].style.padding = "15px";
	}
	
	// UL GAP SIZE
	document.getElementById("navUl").style.gap = "5px"
	
	// CONTAINER WIDTH
	document.getElementById("container").style.width = "90%"
}
