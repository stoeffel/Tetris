var EVENTS = {};
var KEYS = {
	W: 87,
	A: 65,
	S: 83,
	D: 68,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};
var free = true;

$(window).bind('keydown', function(e) {
	if (!free) return true;
	free = false;
	switch (e.which) {
	case KEYS.W:
	case KEYS.UP:
		EVENTS.ROTATE = true
		break;
	case KEYS.A:
	case KEYS.LEFT:
		EVENTS.LEFT = true;
		break;
	case KEYS.S:
	case KEYS.DOWN:
		EVENTS.DOWN = true;
		break;
	case KEYS.D:
	case KEYS.RIGHT:
		EVENTS.RIGHT = true;
		break;
	default:

		break;
	};
handle()
});
$('#content').hammer({
	prevent_default: true,
	drag_vertical: false,
	swipe_time: 800,
	// ms
	swipe_min_distance: 10 // pixels
}).bind("tap swipe", function(ev) {
	if (!free) return true;
	free = false;
	if (ev.type == 'swipe') {
		EVENTS.LEFT = ev.direction == 'left';
		EVENTS.RIGHT = ev.direction == 'right';
		EVENTS.DOWN = ev.direction == 'down';
	}
	if (ev.type == 'tap') {
		EVENTS.ROTATE = true
	}
handle()
});
var handle= function() {
	// handle input
	if (EVENTS.ROTATE) {
		move.angle += 90;
	}
	if (EVENTS.LEFT) {
		move.x -= BrickSide;
	}
	if (EVENTS.DOWN) {
		move.y += BrickSide;
	}
	if (EVENTS.RIGHT) {
		move.x += BrickSide;
	}
	// render
	if (currentBlock)
		currentBlock.draw(move);
	move = {
			x: 0,
			y: 0,
			angle: 0
		}

	// clear events
	EVENTS = {};
	free = true;
}