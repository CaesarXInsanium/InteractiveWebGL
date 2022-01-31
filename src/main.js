/// <reference path="webgl.d.ts" />

const canvas = document.getElementById("example");

function main() {
	const gl = canvas.getContext("webgl");
	if (gl == null) {
		alert("Unable to init WebGL");
		return 1;
	}
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;

