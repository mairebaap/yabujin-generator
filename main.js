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
    document.write("fq higher than 200000, limiting.");
  }
  osc('sine', i);
}

function ybstrt() {
  var l = document.getElementById("k").value;
  for (var i = 0; i = l;  i++) {
    yabujin(l)
  }
}

function time() {
  var s = prompt("How much time? (s)");
  function isDigit(str) {
    console.log(/^\d+$/.test(str));
  }
  if (isDigit(str) == false) {
    var l = document.getElementById("k").value;
    yabujin(l);
    sleep(s);
    yabujin(0)
  }
}   
 

// how?????

function ybstp() {
  location.href = "https://mairebaap.github.io/yabujin-generator";
}

