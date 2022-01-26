const body = document.getElementsByTagName("body")[0];

body.addEventListener("click", scroll);

function scroll() {
	body.style.overflowY = "auto";
}
