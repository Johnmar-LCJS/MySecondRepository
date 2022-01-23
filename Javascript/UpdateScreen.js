window.onload = function () {
	var progressCurr = document.getElementById("progress");
	var progressBar = document.getElementById("progressBar");
	var text = document.getElementById("text");
	let progressInt = 0;

	let barWidth = progressBar.offsetWidth;

	const Loading = setInterval(function () {
		progressInt = ++progressInt;
		progressCurr.style.width = progressInt + "px";
		console.log(progressCurr.offsetWidth);

		if (progressInt < convert(50)) {
			text.textContent = "Checking For Updates...";
		} else if (progressInt < convert(75)) {
			text.textContent = "Loading Updates...";
		} else if (progressInt < convert(85)) {
			text.textContent = "Update Complete. Loading Game...";
		} else if (progressInt == barWidth) {
			clearInterval(Loading);
			window.location.assign("Port.html");
		}
	}, 10);

	function convert(percentage) {
		let length = (percentage / 100) * barWidth;
		return length;
	}
};

var slideIndex = 1;
display(slideIndex);

function Factions(x) {
	display((slideIndex += x));
}

function display(x) {
	var slides = document.getElementsByClassName("updateBG");

	if (x > slides.length) {
		slideIndex = 1;
	}

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}
