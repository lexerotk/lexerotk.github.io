const isMobile = navigator.userAgentData.mobile;
console.log("Mobile User: " + isMobile)
if (isMobile==true) {
    document.getElementById("cont").classList.remove("container")
    document.getElementById("cont").classList.add("mcontainer")
}