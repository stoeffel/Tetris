function blockFactory(o,p) {
	var x = o.x;
	var y = o.y;
	var bricks = [];
	switch (o.type) {
	case 1:
		// 2X2
		bricks.push(new Brick({
			color: o.color,
			x: x,
			y: y
		},p));
		bricks.push(new Brick({
			color: o.color,
			x: x + BrickSide,
			y: y
		},p));
		bricks.push(new Brick({
			color: o.color,
			x: x,
			y: y + BrickSide
		},p));
		bricks.push(new Brick({
			color: o.color,
			x: x + BrickSide,
			y: y + BrickSide
		},p));
		break;
	case 2:
		// 4x1
		if (o.angle == 0 || o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 3
			},p));
		} else {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y + BrickSide
			},p));
		}
		break;
	case 3:
		// L
		if (o.angle == 0) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
		}
		if (o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide * 2
			},p));
		}
		if (o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide * 2
			},p));
		}
		if (o.angle == 270) {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y
			},p));
		}
		break;
	case 4:
		// L
		if (o.angle == 0) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y
			},p));
		}
		if (o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
		}
		if (o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide * 2
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide * 2
			},p));
		}
		if (o.angle == 270) {
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x - BrickSide,
				y: y + BrickSide * 2
			},p));
		}

		break;
	case 5:
		if (o.angle == 0 || o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y
			},p));
		}
		if (o.angle == 270 || o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y - BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
		}

		break;
	case 6:
		if (o.angle == 0 || o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y + BrickSide
			},p));
		}
		if (o.angle == 270 || o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y - BrickSide
			},p));
		}
		// Z
		break;
	case 7:
		if (o.angle == 270) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
		}
		if (o.angle == 180) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y - BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
		}
		if (o.angle == 90) {
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide * 2,
				y: y + BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
		}
		if (o.angle == 0) {
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y - BrickSide
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x,
				y: y
			},p));
			bricks.push(new Brick({
				color: o.color,
				x: x + BrickSide,
				y: y + BrickSide
			},p));
		}
		// W
		break;
	default:

		break;
	};
	return bricks;
}