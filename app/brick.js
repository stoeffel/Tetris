var Brick = function(o,p) {
		p = p || paper
		this.y = o.y;
		this.x = o.x;
		this.ele = p.rect(this.x+1, this.y+1, BrickSide-2, BrickSide-2, 2, 2);
		this.ele.attr({
			fill: o.color
		});
		return this.ele;
	}