const body = document.getElementsByTagName("body")[0];
const arrow = document.getElementById("rightArrow");
const message = document.getElementById("ycsn")

body.addEventListener("click", scroll);

function scroll() {
	body.style.overflowY = "auto";
	arrow.style.display = "block"
	message.textContent = "(you can scroll now)"

}
