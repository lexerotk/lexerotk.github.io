const isMobile = navigator.userAgentData.mobile;
console.log("Mobile User: " + isMobile)
if (isMobile==true) {
    document.getElementById("cont").classList.remove("container")
    document.getElementById("cont").classList.add("mcontainer")
					
					document.getElementById("hi").style.fontSize = "60px";
					document.getElementById("text").style.fontSize = "15px";
					document.getElementByClassName("title").style.fontSize = "35px";

}