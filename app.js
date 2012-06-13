	var width = $('#game').width();
	var height = $('#game').height();
	var paper = Raphael(document.getElementById('game'), width, height);
	var widthNext = $('#nextBlock').width();
	var heightNext = $('#nextBlock').height();
	var paperNextBlock = Raphael(document.getElementById('nextBlock'), widthNext, heightNext);
	var BrickSide = 20;
	var speed = 700;
	var currentBlock = null;
	var nextBlock = null;
	var nextSet = paperNextBlock.set();
	var move = {};
	var bricks = [];
	var score = 0;
	$('#score').html(score);
	var lastUpdate = 0;


	// walls
	var walls = {};
	walls.left = paper.rect(-BrickSide, 0, BrickSide, height, 1, 1);
	walls.right = paper.rect(width + BrickSide, 0, BrickSide, height, 1, 1);
	walls.bottom = paper.rect(0, height, width, BrickSide, 1, 1);
	walls.left.attr({
		opacity: 0
	});
	walls.right.attr({
		opacity: 0
	});
	walls.bottom.attr({
		opacity: 0
	});

	var loop = function() {
			var now = Date.now();
			var elapsed = (now - lastUpdate);
			if (elapsed >= 30000) {
				lastUpdate = now;
				speed -= 50;
				clearInterval(gameLoop)
				gameLoop = setInterval(loop, speed)
			}
			if (!currentBlock) { // create a block if there is none
				if (!nextBlock) nextBlock = new Block();
				currentBlock = nextBlock;
				paperNextBlock.clear();
				if (nextSet) {
					nextSet.animate({
						transform: "t50,150"
					}, 100, 'elastic')
				}
				nextSet = paperNextBlock.set();
				nextBlock = new Block();
				$.each(nextBlock.bricks, function(i, br) {
					var yy = br.attr('y');
					var xx = br.attr('x');
					var fill = br.attr('fill');
					var clone = paperNextBlock.rect(nextBlock.x - xx + 1, nextBlock.y - yy + 1, BrickSide - 2, BrickSide - 2, 2, 2);
					clone.attr({
						fill: fill
					});
					nextSet.push(clone)
				});
				var bb = nextSet.getBBox()

				paperNextBlock.add(nextSet);
				nextSet.animate({
					transform: '...T' + (bb.x * -1 + (50 - bb.width / 2)) + ',' + (bb.y * -1 + (50 - bb.height / 2))
				}, 100, 'elastic')
			}
			move = {
				x: 0,
				y: 0,
				angle: 0
			}

			// update
			move.y += BrickSide;
			// render
			if (!currentBlock.draw(move)) {
				if (currentBlock.getBBox().minY < 0) {
					clearInterval(gameLoop);
					$('#game').css({
						opacity: 0.5
					})
					$('#over').html('game over');
					$('#over').css({
						zIndex: 2000,
						display:'block'
					})
				}
				bricks = $.merge(bricks, currentBlock.bricks);
				currentBlock = null;
			};

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
	var gameLoop = setInterval(loop, speed);
	/*
	

			var now = Date.now();
			var elapsed = (now - lastUpdate);
			var elapsed2 = (now - last);
			if (elapsed >= 60000) {
				lastUpdate = now;
				speed -= 50;
			}
			if (elapsed2 >= speed) {
				last = now;
				block.y += BrickSide;
				block.draw();
			}


			var collision = false;
			if (blocks.length > 0) $.each(blocks, function(i, b) {
				$.each(b.bricks, function(i, br) {
					$.each(block.bricks, function(i, me) {
						var bb1 = br.getBBox();
						var bb2 = me.getBBox();
						//if (Raphael.isBBoxIntersect(me.getBBox(true), br.getBBox(true))) {
						if (br.attr('opacity') != 0) if (bb1.x == bb2.x && bb1.y == bb2.y2) {
							collision = true;
						}
					})
				})
			});
			if (block.bricks.getBBox(false).y2 >= height - 10) collision = true;
			if (!collision) {
				handler();
				block.draw();
				$.each(blocks, function(i, b) {
					$.each(b.bricks, function(i, br) {
						$.each(block.bricks, function(i, me) {
							var bb1 = br.getBBox();
							var bb2 = me.getBBox();
							if (br.attr('opacity') != 0) {
								if (bb1.x == bb2.x && bb1.y == bb2.y2) {
									collision = true;
								}
								if (bb2.x <= 0 - BrickSide + 1 || bb2.x2 >= width + BrickSide - 1) {
									collision = true;
								}
							}
						})
					})
				});
				if (blocks.length == 0) {
					$.each(block.bricks, function(i, me) {
						var bb2 = me.getBBox();
						if (bb2.x <= 0 - BrickSide + 1 || bb2.x2 >= width + BrickSide - 1) {
							collision = true;
						}
					})
				}
				if (block.bricks.getBBox(false).y2 >= height - 10) collision = true;
				if (collision) {
					if (EVENTS.ROTATE) {
						block.angle -= 90;
					}
					if (EVENTS.LEFT) {
						block.x += BrickSide;
					}
					if (EVENTS.RIGHT) {
						block.x -= BrickSide;
					}
					if (EVENTS.DOWN) {
						block.y -= BrickSide;
					}
					block.draw();
				}
				EVENTS = {};
			} else {
				blocks.push(block);
				// check for full lines
				for (var y = 10; y < height; y = y + 20) {
					var line = true;
					for (var x = 10; x < width; x = x + 20) {
						var yep = false;
						$.each(blocks, function(i, b) {
							$.each(b.bricks, function(i, br) {
								var bb = br.getBBox();
								if (br.attr('opacity') != 0) if (bb.x < x && bb.x2 > x && bb.y < y && bb.y2 > y) {
									yep = true;
								}
							});
						});
						if (!yep) {
							line = false;
							break;
						}
					}
					if (line) {
						for (var x = 10; x < width; x = x + 20) {
							var yep = false;
							$.each(blocks, function(i, b) {
								$.each(b.bricks, function(i, br) {
									var bb = br.getBBox();
									if (bb.x < x && bb.x2 > x && bb.y < y && bb.y2 > y) {
										br.attr({
											opacity: 0
										});
									}
								});
							});
						}
						for (var yy = y - 20; yy > 0; yy = yy - 20) {
							for (var x = 10; x < width; x = x + 20) {
								$.each(blocks, function(i, b) {
									$.each(b.bricks, function(i, br) {
										var bb = br.getBBox();
										if (bb.x < x && bb.x2 > x && bb.y < yy && bb.y2 > yy) {
											br.transform("...T0," + BrickSide);
										}
									});
								});
							}
						}
					}
				}
				$.each(blocks, function(i, b) {
					$.each(b.bricks, function(i, br) {
						var bb = br.getBBox();
						if (br.attr('opacity') != 0) if (bb.y < 0) {
							clearInterval(gameLoop);
							alert('game over!');
						}
					});
				});
				block = new Block();
			}

		}

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
	$(window).bind('keydown', function(e) {
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

	});
	$('#content').hammer({
		prevent_default: true,
		drag_vertical: false,
		swipe_time: 800,
		// ms
		swipe_min_distance: 5 // pixels
	}).bind("tap swipe", function(ev) {
		if (ev.type == 'swipe') {
			EVENTS.LEFT = ev.direction == 'left';
			EVENTS.RIGHT = ev.direction == 'right';
			EVENTS.ROTATE = ev.direction == 'up';
			EVENTS.DOWN = ev.direction == 'down';
		}
		if (ev.type == 'tap') {
			EVENTS.ROTATE = true
		}

	});

	function handler() {

		if (EVENTS.ROTATE) {
			block.angle += 90;
		}
		if (EVENTS.LEFT) {
			block.x -= BrickSide;
		}
		if (EVENTS.DOWN) {
			block.y += BrickSide;
		}
		if (EVENTS.RIGHT) {
			block.x += BrickSide;
		}
	}
	

	/**/
	