(function () {
  document.addEventListener("DOMContentLoaded", function () { 
    var start = document.getElementById("start"), canGlow = true;
    start.addEventListener("click", function () {
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
      if (!canGlow) return;
      start.classList.add("glow");
    }, 3000);
    setTimeout(lazyLoadImages, 100);
    var headers = document.querySelectorAll(".header-item-content");
    for (var i = 0; i < headers.length; i++) {
      headers[i].addEventListener("mouseenter", function () {
        var selector = "." + this.getAttribute("class").replace("-content ", ".");
        document.querySelectorAll(selector)[0].classList.add("on");
      });
      headers[i].addEventListener("mouseleave", function () {
        var selector = "." + this.getAttribute("class").replace("-content ", ".");
        document.querySelectorAll(selector)[0].classList.remove("on");
      });
    }
  });
}());

function lazyLoadImages () {
  var css = "", style = document.createElement('style');
  for (var i = 1; i <= 19; i++) css += "#cover .cover" + i + " { background: #e6e6e6 url(image/" + i + ".jpg) no-repeat center center fixed; }";
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);
}
