console.log('Hello World!');
// one context per document
/*
var context = new (window.AudioContext || window.webkitAudioContext)();
var osc = context.createOscillator(); // instantiate an oscillator
osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
osc.frequency.value = 440; // Hz
osc.connect(context.destination); // connect it to the destination
osc.start(); // start the oscillator
osc.stop(context.currentTime + 2); // stop 2 seconds after the current time */

function osc(tp, fq) {
  var ctx = new (window.AudioContext || window.webkitAudioConnect)();
  var j = ctx.createOscillator();
  j.type = tp;
  j.frequency.value = fq;
  j.connect(ctx.destination);
  j.start();
}

function yabujin(intensity) {
  var i = Math.floor(Math.random() * intensity * intensity / 2 * 100)
  var j = intensity;
  if (i > 20000) {
    osc('sine', 9000);
    location.reload();
  }
  document.write("Intensity: ")
  document.write(i)
  document.write()
  document.write("Actual Intensity:")
  document.write(j)
  osc('sine', i)
}

function ybstrt() {
  var l = document.getElementById("k").value;
  for (var i = 0; i = l;  i++) {
    yabujin(l)
  }
}
