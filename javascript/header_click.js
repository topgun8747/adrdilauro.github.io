function reactToHeaderClick (identifier) {
  var layer = document.getElementById("layer"),
      currentlyOn = document.querySelector(".page-content.on"),
      newOn = document.querySelector(".page-content." + identifier);
  document.getElementById("signature").style.display = "none";
  layer.style.display = "block";
  makeAnimation(function () {
    layer.style.display = "none";
  });

  function makeAnimation (callback) {
    var instructions;
    tradeWind.run([
      {
        elements: "#header-up",
        animations: [
          {
            property: "background-color",
            animationDetails: {
              duration: "0.8s"
            },
            final: "#df0101"
          }
        ]
      }
    ], function () {
      document.getElementById("header-up").style.backgroundColor = "black";
    });
    instructions = [
      {
        elements: ".page-content." + identifier,
        preStyling: [
          {
            property: "z-index",
            value: "26"
          },
          {
            property: "height",
            value: "0px"
          },
          {
            property: "border-bottom",
            value: "5px solid #df0101"
          },
          {
            property: "display",
            value: "block"
          }
        ],
        animations: [
          {
            property: "height",
            animationDetails: {
              duration: "2s",
              delay: "0.6s",
              easing: "linear"
            },
            final: "100%"
          }
        ]
      }
    ];
    if (currentlyOn) {
      instructions.push({
        //elements:
      });
    }
    tradeWind.run(instructions, function () {
      if (currentlyOn) currentlyOn.classList.remove("on");
      newOn.classList.add("on");
      newOn.style.zIndex = "21";
      newOn.style.borderBottom = "none";
      callback();
    });
  }
}
