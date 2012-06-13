function blockFactory(o) {
	var x = o.x;
	var y = o.y;
	var bricks = [];
	/*
	.attr({
			'stroke-linecap': 'round',
			'stroke-width': 2
		})
	 */
	switch (o.type) {
	case 1:
		// 2X2
		bricks.push(new Brick({
			color: o.color,
			x: x,
			y: y
		}));
		bricks.push(new Brick({
			color: o.color,
			x: x + BrickSide,
			y: y
		}));
		bricks.push(new Brick({
			color: o.color,
			x: x,
			y: y + BrickSide
		}));
		bricks.push(new Brick({
			color: o.color,
			x: x + BrickSide,
			y: y + BrickSide
		}));
		break;
	case 2:
		// 4x1
		if (o.angle == 0 || o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 3
			}));
		} else {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y + BrickSide
			}));
		}
		break;
	case 3:
		// L
		if (o.angle == 0) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
		}
		if (o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide * 2
			}));
		}
		if (o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide * 2
			}));
		}
		if (o.angle == 270) {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y
			}));
		}
		break;
	case 4:
		// L
		if (o.angle == 0) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y
			}));
		}
		if (o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
		}
		if (o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide * 2
			}));
		}
		if (o.angle == 270) {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide * 2
			}));
		}

		break;
	case 5:
		if (o.angle == 0 || o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y
			}));
		}
		if (o.angle == 270 || o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y - BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
		}

		break;
	case 6:
		if (o.angle == 0 || o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y + BrickSide
			}));
		}
		if (o.angle == 270 || o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y - BrickSide
			}));
		}
		// Z
		break;
	case 7:
		if (o.angle == 270) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
		}
		if (o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y - BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
		}
		if (o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y + BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
		}
		if (o.angle == 0) {
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y - BrickSide
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			}));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			}));
		}
		// W
		break;
	default:

		break;
	};
	return bricks;
}