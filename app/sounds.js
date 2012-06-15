var sounds = {};

function loadSound(url, name, cb) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      sounds[name] = buffer;
      if (cb) {
        cb();
      }
    }, function() {});
  }
  request.send();
}

function playSound(buffer,loop) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer; // tell the source which sound to play
  source.loop = loop;
  source.connect(context.destination); // connect the source to the context's destination (the speakers)
  source.noteOn(0); // play the source now
}

var context;
window.addEventListener('load', function init() {
  try {
    context = new webkitAudioContext();
    loadSound('resources/sounds/Tetris-Theme-Original.mp3', 'track', function() {
      playSound(sounds.track,true)
    });

  } catch (e) {
    alert('Web Audio API is not supported in this browser');
  }
}, false);