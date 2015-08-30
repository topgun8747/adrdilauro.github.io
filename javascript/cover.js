function coverAnimation (stopMe, withFade) {
  var cover = document.getElementById("cover"), imageNew, imageOld;

  if (withFade) {
    extractImage();
    cover.classList.add("show" + imageNew);
    tradeWind.run([
      {
        elements: "#cover",
        animations: [
          {
            property: "opacity",
            animationDetails: {
              duration: "2.5s"
            },
            final: "1"
          }
        ]
      }
    ]);
    setTimeout(coverRecursion, 2000);
  } else {
    coverRecursion();
  }

  function randomExtract () {
    return parseInt(Math.random() * 18) + 1;
  }

  function extractImage () {
    var temp = randomExtract();
    while (temp === imageNew) temp = randomExtract();
    imageOld = imageNew;
    imageNew = temp;
  }

  function coverRecursion () {
    if (stopMe.stop) return;
    extractImage();
    cover.classList.add("show" + imageNew);
    cover.classList.remove("show" + imageOld);
    setTimeout(coverRecursion, 600);
  }
}
