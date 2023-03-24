let font;
let graphic;

function preload() {
	font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup() {
	createCanvas(1200, 600);

	graphic = createGraphics(1200, 600);

	graphic.fill("#fff");
	graphic.textFont(font);
	graphic.textSize(500);
	graphic.textAlign(CENTER, CENTER);
	graphic.text("ooo", 600, 260);
}

function draw() {
	background("#000");

	const tileSize = 50;

	for (let y = 0; y < 12; y++) {
    // -> By mouse
    let position = winMouseX / windowWidth;

    //* or
    // -> By Frame
    // let position = frameCount;
    // // loop over frames
    // position = position % 120;

    // // if on the back half we want to reverse
    // if (position > 60) position = 120 - position;
    // position = position / 60;

    position = easeInOutCubic(position);


		const sx = 0;
		const sy = y * tileSize  * position;
		const sw = 1200;
		const sh = tileSize * position + (600 - tileSize) * (1 - position);

		const dx = 0;
		const dy = y * tileSize;
		const dw = 1200;
		const dh = tileSize;

		image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
	}
}
