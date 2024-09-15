const toggle = document.getElementById("sun_icon");
const body = document.querySelector("body");
const first = document.querySelector(".first");
const middle = document.querySelector(".middle");
const last = document.querySelector(".last");
const about = document.querySelector(".about");
const moon = document.querySelector(".bi-brightness-high");
const footer = document.querySelector("footer");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high")) {
    body.style.background = "white";
    first.style.color = "black";
    middle.style.color = "black";
    last.style.color = "black";
    about.style.color = "black";
    moon.style.color = "black";
    footer.style.color = "black";
  } else {
    body.style.background = "black";
    first.style.color = "white";
    middle.style.color = "white";
    last.style.color = "white";
    about.style.color = "white";
    moon.style.color = "white";
    footer.style.color = "white";
  }
});
