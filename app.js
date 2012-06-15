	var width = $('#game').width();
	var height = $('#game').height();
	var paper = Raphael(document.getElementById('game'), width, height);
	var widthNext = $('#nextBlock').width();
	var heightNext = $('#nextBlock').height();
	var paperNextBlock = Raphael(document.getElementById('nextBlock'), widthNext, heightNext);
	var BrickSide = 20;
	var speed = 500;
	var currentBlock = null;
	var nextBlock = null;
	var nextSet = paperNextBlock.set();
	var move = {};
	var bricks = [];
	var score = 0;
	$('#score').html(score);
	var lastUpdateScore=0;


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
			if (!currentBlock) { // create a block if there is none
				if (!nextBlock) nextBlock = new Block();
				currentBlock = nextBlock;
				
				paperNextBlock.clear();
				nextBlock = new Block();

				nextSet = new Block(paperNextBlock, {
					color: nextBlock.color,
					x: BrickSide,
					y: BrickSide,
					angle: nextBlock.angle,
					type: nextBlock.type

				});
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
				checkFullines();
			};
			
		}
	var gameLoop = setInterval(loop, speed);
	
	