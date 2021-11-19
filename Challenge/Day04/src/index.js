const title = document.createElement("h1");

function size() {
  if (window.innerWidth >= 1000) {
    document.body.style.backgroundColor = "orange";
  } else if (window.innerWidth >= 600) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "skyblue";
  }
}

title.innerText = "Hello!";
title.style.color = "white";
document.body.appendChild(title);

window.addEventListener("resize", size);
