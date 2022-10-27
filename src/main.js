import "../style/style.css";

import { box, inner, restart } from "./element";

import App from "./App";

const app = new App({
	box: box,
	inner: inner,
	restart: restart,
});
app.init();

window.addEventListener("keydown", e => {
	if (e.key === "r") {
		app.setup();
	}
});

restart.addEventListener("click", () => {
	app.setup();
});
