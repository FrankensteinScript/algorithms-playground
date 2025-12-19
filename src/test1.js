const MIN_WIDTH = 150;

document.querySelectorAll(".resizer").forEach((resizer) => {
	let startX, leftPanel, rightPanel, leftWidth, rightWidth;

	resizer.addEventListener("mousedown", (e) => {
		startX = e.clientX;

		leftPanel = resizer.previousElementSibling;
		rightPanel = resizer.nextElementSibling;

		leftWidth = leftPanel.offsetWidth;
		rightWidth = rightPanel.offsetWidth;

		document.addEventListener("mousemove", onMove);
		document.addEventListener("mouseup", onStop);
	});

	function onMove(e) {
		const dx = e.clientX - startX;

		const newLeft = leftWidth + dx;
		const newRight = rightWidth - dx;

		if (newLeft < MIN_WIDTH || newRight < MIN_WIDTH) return;

		leftPanel.style.width = newLeft + "px";
		rightPanel.style.width = newRight + "px";
		leftPanel.style.flex = "none";
		rightPanel.style.flex = "none";
	}

	function onStop() {
		document.removeEventListener("mousemove", onMove);
		document.removeEventListener("mouseup", onStop);
	}
});
