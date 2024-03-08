function osc(tp, fq, download) {
  var ctx = new (window.AudioContext || window.webkitAudioConnect)();
  var j = ctx.createOscillator();
  j.type = tp;
  j.frequency.value = fq;
  j.connect(ctx.destination);
  j.start();
  var chk = document.getElementById("test").value;
  download = chk;
}

function yabujin(intensity) {
  var i = Math.floor(Math.random() * intensity * intensity / 2 * 100)
  var j = intensity;
  if (i > 20000) {
    osc('sine', 9000);
    location.reload();
  }
  osc('sine', i, true)
}

function ybstrt() {
  var l = document.getElementById("k").value;
  for (var i = 0; i = l;  i++) {
    yabujin(l)
  }
}

function time() {
  alert("beta!!!!!!!")
}

function ybstp() {
  return;
}

