const isMobile = navigator.userAgentData.mobile;
console.log("Mobile User: " + isMobile)
console.log(document.getElementsByClassName("text").length)
if (isMobile==true) {
<<<<<<< HEAD
=======
    document.getElementById("cont").classList.remove("container")
    document.getElementById("cont").classList.add("mcontainer")
>>>>>>> 3aeb08d (Fixed Bugs and optimized mobile experience (again))
	for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
		document.getElementsByClassName("text")[i].style.fontSize = "15px";
	}
	for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
		document.getElementsByClassName("title")[i].style.fontSize = "30px";
	}
<<<<<<< HEAD
=======
	document.getElementById("hi").style.fontSize = "50px";
>>>>>>> 3aeb08d (Fixed Bugs and optimized mobile experience (again))
}