var Block = function() {
		this.color = randomColor();
		this.y = -80;
		this.x = width / 2;
		this.angle = 90 * random(0, 3);
		this.type = random(1, 7);
		this.bricks = [];
		this.bricks = blockFactory(this);
		this.remove = function(){
			$.each(this.bricks, function(i,v) {
				v.remove();
			});
		};
		this.draw = function(move) {
			if (!gameLoop){
				return true;
			}
			this.angle += move.angle || 0;
			if (this.angle >= 360) this.angle = 0;
			this.x += move.x || 0;
			this.y += move.y || 0;
			this.remove();
			this.bricks = blockFactory(this);
			if (this.hitsWall()){
				var bb = this.getBBox();
				this.undo(move);
				return bb.maxY+BrickSide/2 <= height;
			}
			if (bricks) {
				if (this.intersects(bricks)) {
					this.undo(move);
					return false;
				}
			}
			return true;
		};
		this.undo = function(move) {
			this.angle += move.angle * -1 || 0;
			if (this.angle == -90) this.angle = 270;
			this.x += move.x * -1 || 0;
			this.y += move.y * -1 || 0;
			this.remove();
			this.bricks = blockFactory(this);
		};
		this.intersects = function(b) {
			var inter = false;
			var me = this;
			if (b instanceof Array) {
				$.each(b, function(i,v) {
					if (me.intersectEachBrick(v)) {
						inter = true;
					}
				});
			} else {
				if (this.intersectEachBrick(b)) {
					inter = true;
				}
			}

			return inter;
		};
		this.intersectEachBrick = function(b) {
			var inter = false;
			$.each(this.bricks, function(i,v) {
				if (Raphael.isBBoxIntersect(b.getBBox(), v.getBBox())) {
					inter = true;
				}
			});
			return inter;
		};
		this.hitsWall = function(){
			var bb = this.getBBox();
			return bb.minX < -1 || bb.maxX  > width || bb.maxY  > height;
		};
		this.getBBox = function(){
			var minX = this.x, minY=this.y, maxX = this.x, maxY = this.y;
			$.each(this.bricks, function(i,v) {
				var x = v.attr('x'), y = v.attr('y');
				if (x < minX) minX = x;
				if (x > maxX) maxX = x;
				if (y < minY) minY = y;
				if (y > maxY) maxY = y;
			});
			return {
				minX: minX,
				minY: minY,
				maxX:maxX,
				maxY:maxY
			};
		};
	};