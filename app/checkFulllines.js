function checkFullines() {
	// check for full lines
	var linesCount = 0,
		lines = {},
		fulllines = [],
		ys = [];
	$.each(bricks, function(i, v) {
		var x = v.attr('x'),
			y = v.attr('y');
		if (!lines[y]) lines[y] = [];
		lines[y].push(v);
		if (lines[y].length == 10) {
			linesCount++;
			fulllines = $.merge(fulllines, lines[y]);
			ys.push(y);
			delete lines[y];
		}
	});
	if (linesCount > 0) {
		switch (linesCount) {
		case 1:
			score += 10;
			break;
		case 2:
			score += 25;
			break;
		case 3:
			score += 40;
			break;
		case 4:
			score += 60;
			break;
		default:

			break;
		};
		$('#score').html(score);
		if (score - lastUpdateScore >= 20) {
			lastUpdateScore = score;
			speed -= 30;
			clearInterval(gameLoop)
			gameLoop = setInterval(loop, speed)
		}


		clearInterval(gameLoop)
		var linesToRemove = paper.set()
		$.each(fulllines, function(i, v) {
			linesToRemove.push(v);
		})
		linesToRemove.animate({
			opacity: 0,
			transform: 's0r360'
		}, 1000, 'bounce', function() {
			linesToRemove.remove();
			bricks = [];
			$.each(lines, function(i, v) {
				$.merge(bricks, v);
			});
			ys.sort(function(a, b) {
				return (a - b);
			})
			var newBricks = [];
			var oldBricks = [];
			$.each(ys, function(i, y) {
				newBricks = [];
				$.each(bricks, function(ii, brick) {
					var yy = brick.attr('y');
					var xx = brick.attr('x');
					var fill = brick.attr('fill');
					if (yy < y) {
						oldBricks.push(brick);
						newBricks.push(new Brick({
							x: xx - 1,
							y: yy - 1 + BrickSide,
							color: fill
						}));
					} else {
						newBricks.push(brick);
					}
				});
				delete bricks;
				bricks = $.merge([], newBricks);
				delete newBricks;
			});
			$.each(oldBricks, function(i, o) {
				o.remove();
			})

			gameLoop = setInterval(loop, speed)
		});

	}
}