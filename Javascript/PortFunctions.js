function onHover(event) {
	if (event.type == "mouseover") {
		playerName.style.width = "250px";
	} else if (event.type == "mouseout") {
		playerName.style.width = "0";
	}
}

Stripes = (function () {
	var battle = document.getElementById("battle");
	var battleCtx = battle.getContext("2d");

	var formation = document.getElementById("formation");
	var formationCtx = formation.getContext("2d");

	var color1 = "transparent";
	var color2 = "#ffffff";

	var opacity = ".25";

	var lines = 100;
	for (var i = -300; i < lines * 1; i++) {
		var lineWidth = 300 / lines;
		battleCtx.beginPath();
		battleCtx.globalAlpha = opacity;
		battleCtx.strokeStyle = i % 6 ? color1 : color2;
		battleCtx.lineWidth = lineWidth;

		battleCtx.moveTo(i * lineWidth + lineWidth + 450, 0);
		battleCtx.lineTo(0 + i * lineWidth + lineWidth, 300);

		battleCtx.stroke();

		formationCtx.beginPath();
		formationCtx.globalAlpha = opacity;
		formationCtx.strokeStyle = i % 4 ? color1 : color2;
		formationCtx.lineWidth = lineWidth;

		formationCtx.moveTo(i * lineWidth + lineWidth + 350, 0);
		formationCtx.lineTo(0 + i * lineWidth + lineWidth, 400);

		formationCtx.stroke();
	}
})();

Time = (function () {
	var clock = document.getElementById("clock");
	var shift = document.getElementById("shift");

	setInterval(function () {
		var time = new Date();

		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();

		var meridiem = time.getHours() < 12 ? "AM" : "PM";

		var hours = hours % 12;

		if (hours == 0) {
			hours = 12;
		} else {
			hours = hours;
		}

		clock.textContent = hours + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + meridiem;

		if ((hours == 12 || (hours >= 1 && hours <= 4)) && meridiem == "AM") {
			shift.src = "Images/MMBG(s)/MainEveningBG.png";
		} else if (hours > 4 && hours <= 6 && meridiem == "AM") {
			shift.src = "Images/MMBG(s)/MainNoonBG.png";
		} else if (hours > 6 && hours <= 11 && meridiem == "AM") {
			shift.src = "Images/MMBG(s)/MainDayBG.png";
		} else if ((hours == 12 || (hours >= 1 && hours <= 2)) && meridiem == "PM") {
			shift.src = "Images/MMBG(s)/MainDayBG.png";
		} else if (hours > 2 && hours <= 6 && meridiem == "PM") {
			shift.src = "Images/MMBG(s)/MainNoonBG.png";
		} else if (hours > 6 && hours <= 11 && meridiem == "PM") {
			shift.src = "Images/MMBG(s)/MainEveningBG.png";
		}
	}, 1000);

	function addZero(time) {
		return time < 10 ? "0" + time : time;
	}
})();

Commission = (function () {
	const canvas = document.getElementById("taskButton");
	const ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.fillStyle = "rgba(250, 250, 250, 0.15)";
	ctx.strokeStyle = "rgba(100, 100, 100, 0.2)";
	ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
	ctx.shadowBlur = 40;
	ctx.moveTo(250, 495);
	ctx.lineTo(480, 250);
	ctx.lineTo(250, 5);
	ctx.lineTo(250, 495);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "rgba(41, 40, 57, 0.8)";
	ctx.strokeStyle = "transparent";
	ctx.shadowBlur = 0;
	ctx.moveTo(280, 415);
	ctx.lineTo(440, 250);
	ctx.lineTo(280, 80);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.strokeStyle = "#c6ebff";
	ctx.lineWidth = 6;
	ctx.lineCap = "square";
	ctx.moveTo(315, 320);
	ctx.lineTo(380, 250);
	ctx.moveTo(380, 250);
	ctx.lineTo(315, 180);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#ffffff";
	ctx.rotate((45 * Math.PI) / 180);
	ctx.fillRect(380, -60, 30, 30);
	ctx.closePath();
})();

playerName = (function () {
	const canvas = document.getElementById("playerName");
	const width = canvas.offsetWidth;
	const ctx = canvas.getContext("2d");

	let gradient = ctx.createLinearGradient(0, 0, 275, 0);
	gradient.addColorStop(0, "rgba(37, 35, 49, 0.8)");
	gradient.addColorStop(1, "transparent");

	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.fillStyle = gradient;
	ctx.strokeStyle = "transparent";
	ctx.moveTo(65, 55);
	ctx.lineTo(295, 55);
	ctx.lineTo(295, 5);
	ctx.lineTo(65, 5);
	ctx.lineTo(40, 30);
	ctx.lineTo(65, 55);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "#5da1ff";
	ctx.lineCap = "round";
	ctx.moveTo(69, 50);
	ctx.lineTo(290, 50);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "#5da1ff";
	ctx.lineCap = "round";
	ctx.moveTo(69, 50);
	ctx.lineTo(49, 30);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "#ffde00";
	ctx.lineCap = "square";
	ctx.moveTo(70, 45);
	ctx.lineTo(289, 45);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.fillStyle = "#ffffff";
	ctx.font = "18px Helvetica";
	ctx.fillText("Johnmar", convert(45), 40);
	ctx.stroke();
	ctx.closePath();

	function convert(percentage) {
		let length = (percentage / 100) * width;
		return length;
	}
})();

commissionFunction = (function () {
	const button = document.getElementById("parentTaskButton");
	const taskWindow = document.getElementById("taskWindow");
	const taskConsole = document.getElementById("taskConsole");

	button.addEventListener("click", displayTaskWindow);
	taskWindow.addEventListener("click", hideTaskWindow);
	taskConsole.addEventListener("click", (event) => event.stopPropagation());

	function displayTaskWindow() {
		displayHide(taskWindow, taskConsole, button);
	}

	function hideTaskWindow() {
		hideDisplay(taskWindow, taskConsole, button);
	}

	function hideDisplay(hide, hide2, display) {
		setTimeout(function () {
			hide.style.display = "none";
			display.style.left = "-3%";
		}, 500);
		hide2.style.cssText = "top: 50%; left: -40%; transform: translate(-40%, -50%)";
	}

	function displayHide(display, display2, hide) {
		display.style.display = "block";
		setTimeout(function () {
			display2.style.cssText = "top: 50%; left: 5%; transform: translate(-5%, -50%)";
		}, 1);
		hide.style.left = "-50%";
	}
})();

var bannerIndex = 1;
displayBanner(bannerIndex);

function prevNextBanner(n) {
	displayBanner((bannerIndex += n));
}

function banner(n) {
	displayBanner((bannerIndex = n));
}

const auto = setInterval(function () {
	let x = 0;
	x = ++x;

	if (x < 50) {
		prevNextBanner(1);
	}
}, 5000);

function displayBanner(n) {
	var i;
	var banner = document.getElementsByClassName("events");
	var rect = document.getElementsByClassName("rect");
	if (n > banner.length) {
		bannerIndex = 1;
	}
	if (n < 1) {
		bannerIndex = banner.length;
	}
	for (i = 0; i < banner.length; i++) {
		banner[i].style.display = "none";
	}
	for (i = 0; i < rect.length; i++) {
		rect[i].className = rect[i].className.replace(" active", "");
	}
	banner[bannerIndex - 1].style.display = "block";
	rect[bannerIndex - 1].className += " active";
}

// Not my Code

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		// if present, the header is where you move the DIV from:
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
