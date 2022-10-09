const clockTitle = document.querySelector(".js-clock");

function dDate() {
  const today = new Date();
  const christmas = new Date(`${today.getFullYear()}-12-25:00:00:00+0900`);
  const diff = new Date(christmas - today);

  const secondsInMs = Math.floor(diff / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = String(Math.floor(hoursInMs / 24)).padStart(2, "0");
  const seconds = String(secondsInMs % 60).padStart(2, "0");
  const minutes = String(minutesInMs % 60).padStart(2, "0");
  const hours = String(hoursInMs % 24).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

dDate();
setInterval(dDate, 1000);
