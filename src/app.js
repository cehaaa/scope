import { BOX_SIZE, WINDOW_SIZE } from "./constant";

export class App {
	constructor({ box, inner, restart }) {
		this.box = box;
		this.inner = inner;
		this.restart = restart;

		this.box.addEventListener("mousedown", evt => {
			const POS = {
				x: evt.clientX - this.box.offsetLeft,
				y: evt.clientY - this.box.offsetTop,
			};

			this.box.addEventListener("mousemove", move);

			this.box.addEventListener("mouseup", () => {
				box.removeEventListener("mousemove", move);
			});

			function move(evt) {
				box.style.left = `${evt.clientX - POS.x}px`;
				box.style.top = `${evt.clientY - POS.y}px`;

				inner.style.left = `${(evt.clientX - POS.x) * -1}px`;
				inner.style.top = `${(evt.clientY - POS.y) * -1}px`;
			}
		});
	}

	init() {
		this.greet();
		this.setup();
	}

	center() {
		return {
			left: WINDOW_SIZE.width / 2 - BOX_SIZE / 2,
			top: WINDOW_SIZE.height / 2 - BOX_SIZE / 2,
		};
	}

	setup() {
		const center = this.center();

		this.box.style.left = `${center.left}px`;
		this.box.style.top = `${center.top}px`;

		this.inner.style.left = `${center.left * -1}px`;
		this.inner.style.top = `${center.top * -1}px`;
	}

	greet() {
		console.log(
			`Hi! 👋 I hope you enjoy intracting this drag & window! checkout the GitHub repo here https://github.com/cehaaa/scope/`
		);
	}
}

export default App;
