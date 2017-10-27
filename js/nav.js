var nav = document.querySelector(".page-header__navigation");
var btn = document.querySelector(".logo__burger-button");

nav.classList.add("js-hidden");
btn.classList.add("js-active")

btn.addEventListener("click", function(event) {
  if (nav.classList.contains("js-hidden")) {
    nav.classList.remove("js-hidden");
    nav.classList.add("js-active");
    btn.classList.add("js-burger-close");
  } else {
    nav.classList.remove("js-active");
    btn.classList.remove("js-burger-close");
    nav.classList.add("js-hidden");

  }
});
