function reactToHeaderClick (identifier) {
  var layer = document.getElementById("layer");
  document.getElementById("signature").style.display = "none";
  layer.style.display = "block";
  makeAnimation(function () {
    layer.style.display = "none";
  });

  function makeAnimation (callback) {
    console.log("animazione " + identifier);
    callback();
  }
}
