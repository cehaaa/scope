const box = document.querySelector(".box");
const inner = document.querySelector(".inner");
const restartBox = document.querySelector(".restart");
const BOX_SIZE = 400;
const windowSize = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const init = () => {
	setup();
};

const setup = () => {
	box.style.left = `${windowSize.width / 2 - BOX_SIZE / 2}px`;
	box.style.top = `${windowSize.height / 2 - BOX_SIZE / 2}px`;

	inner.style.left = `${(windowSize.width / 2 - BOX_SIZE / 2) * -1}px`;
	inner.style.top = `${(windowSize.height / 2 - BOX_SIZE / 2) * -1}px`;
};

const greet = () => {
	console.log(
		`Hi! 👋 I hope you enjoy intracting this drag & window! checkout the GitHub repo here https://github.com/cehaaa/scope/`
	);
};

window.addEventListener("load", () => {
	greet();
	init();
});

window.addEventListener("keydown", e => {
	if (e.key === "r") {
		init();
	}
});

restartBox.addEventListener("click", init);

box.addEventListener("mousedown", e => {
	const pos = {
		x: e.clientX - box.offsetLeft,
		y: e.clientY - box.offsetTop,
	};

	box.addEventListener("mousemove", move);

	box.addEventListener("mouseup", () => {
		box.removeEventListener("mousemove", move);
	});

	function move(e) {
		box.style.left = `${e.clientX - pos.x}px`;
		box.style.top = `${e.clientY - pos.y}px`;

		inner.style.left = `${(e.clientX - pos.x) * -1}px`;
		inner.style.top = `${(e.clientY - pos.y) * -1}px`;
	}
});
