var colors= ['0,204,0', '217,0,126', '255,204,0'];
var randomColor = function() {
		return "rgb("+colors[random(0,2)]+")";
		/*return '#' + (function co(lor) {
			return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) && (lor.length == 6) ? lor : co(lor);
		})('');*/
	}
var random = function(from,to) {
		return Math.floor(Math.random()*(to-from+1)+from);
	}