var randomColor = function() {
		return '#' + (function co(lor) {
			return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) && (lor.length == 6) ? lor : co(lor);
		})('');
	}
var random = function(i, j) {
		return Math.floor((Math.random() * j) + i)
	}