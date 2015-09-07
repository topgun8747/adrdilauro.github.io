(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById("start"), canGlow = true, clicked = false, alreadySelected = false;
    start.addEventListener("click", function () {
      clicked = true;
      start.classList.remove("glow");
      canGlow = false;
      initialAnimation();
    });
    start.addEventListener("mouseenter", function () {
      start.classList.remove("glow");
    });
    start.addEventListener("mouseleave", function () {
      if (!canGlow) return;
      start.classList.add("glow");
    });
    setTimeout(function () {
      if (clicked) return;
      alert("Click on the disc!");
    }, 5000);
    setTimeout(function () {
      if (!canGlow) return;
      start.classList.add("glow");
    }, 3000);
    setTimeout(lazyLoadImages, 100);
    var headers = document.querySelectorAll(".header-item-content");
    for (var i = 0; i < headers.length; i++) {
      headers[i].addEventListener("mouseenter", function () {
        if (this.classList.contains("on")) return;
        var selector = "." + this.getAttribute("class").replace("-content ", ".");
        document.querySelectorAll(selector)[0].classList.add("on");
      });
      headers[i].addEventListener("mouseleave", function () {
        if (this.classList.contains("on")) return;
        var selector = "." + this.getAttribute("class").replace("-content ", ".");
        document.querySelectorAll(selector)[0].classList.remove("on");
      });
      headers[i].addEventListener("click", function () {
        if (this.classList.contains("on")) return;
        var identifier, classList = this.classList;
        for (var j = 0; j < classList.length; j++) {
          if (classList[j] !== "header-item-content") identifier = classList[j];
        }
        if (alreadySelected) {
          var allHeaders = document.querySelectorAll(".header-item.on")
          for (var j = 0; j < allHeaders.length; j++) allHeaders[j].classList.remove("on");
          document.querySelectorAll(".header-item-content.on")[0].classList.remove("on");
        }
        alreadySelected = true;
        var selector = "." + this.getAttribute("class").replace("-content ", ".");
        document.querySelectorAll(selector)[0].classList.add("on");
        this.classList.add("on");
        reactToHeaderClick(identifier);
      });
    }
  });
}());

function lazyLoadImages () {
  var coverExtraction = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);

  function shuffle (o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  var css = "", style = document.createElement('style');
  for (var i = 0; i < 6; i++) css += "#cover .cover" + (i + 1) + " { background: #e6e6e6 url(image/" + coverExtraction[i] + ".jpg) no-repeat center center fixed; }";
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);
}
