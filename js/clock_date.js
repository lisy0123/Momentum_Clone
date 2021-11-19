const clock = document.querySelector("#clock");
const date = document.querySelector(".date");

const today = new Date();

const mothNames = [
    "Jan",
    "Feb",
    "Ma",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];

function getClock() {
    const today = new Date();
    const hours = String((today.getHours())%12).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds} ${today.getHours() >= 12 ? "PM" : "AM"
    }`;
}

function getDate() {
    date.innerHTML = `${days[today.getDay()]} ${mothNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
}

getDate();
getClock();
setInterval(getDate, 1000 * 60 * 10);
setInterval(getClock, 1000);
