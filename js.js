// JavaScript function for going to a random page 
function runme_parent() {
  var arr = ["things/autumn.html", "things/blue.html", "things/clouds-wondrous-clouds.html", "things/dark-means-spooky.html", "things/dead-of-night.html", "things/graphic-accidents.html", "things/not-a-photo.html", "things/patterns-amsterdam.html", "things/patterns-taipei.html", "things/pointless-shapes.html", "things/rust.html", "things/self-portraits.html", "things/signal-noise.html", "things/slow.html", "things/stream-as-sculptor.html", "things/veg-soy-sauce.html", "thoughts/PhD.html", "thoughts/sleep-machine.html"];
  var value = arr[Math.floor(Math.random() * arr.length)];
  window.location = value; 
}

function runme() {
  var arr = ["../things/autumn.html", "../things/blue.html", "../things/clouds-wondrous-clouds.html", "../things/dark-means-spooky.html", "../things/dead-of-night.html", "../things/graphic-accidents.html", "../things/not-a-photo.html", "../things/patterns-amsterdam.html", "../things/patterns-taipei.html", "../things/pointless-shapes.html", "../things/rust.html", "../things/self-portraits.html", "../things/signal-noise.html", "../things/slow.html", "../things/stream-as-sculptor.html", "../things/veg-soy-sauce.html", "../thoughts/PhD.html", "../thoughts/sleep-machine.html"];
  var value = arr[Math.floor(Math.random() * arr.length)];
  window.location = value; 
}

