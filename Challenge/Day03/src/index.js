// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const superEventHandler = {
  mouseenter: function () {
    text.innerHTML = "The mouse is here!";
    text.style.color = colors[0];
  },
  mouseleave: function () {
    text.innerHTML = "The mouse is gone!";
    text.style.color = colors[1];
  },
  resize: function () {
    text.innerHTML = "You just resized!";
    text.style.color = colors[2];
  },
  context: function () {
    text.innerHTML = "That was a right click!";
    text.style.color = colors[4];
  }
};

const text = document.querySelector("h2");

text.addEventListener("mouseenter", superEventHandler.mouseenter);
text.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("resize", superEventHandler.resize);
document.addEventListener("contextmenu", superEventHandler.context);
