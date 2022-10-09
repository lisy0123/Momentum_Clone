const links = document.querySelectorAll(".links");
const searchForm = document.querySelector("#search-form");
const serachInput = document.querySelector("#search-form input");

function bookmarkSubmit(event) {
    const link = `https://www.${event.target.textContent}.com`;
    location.href = link;
}

function searchSubmit(event) {
    event.preventDefault();
    const link = `https://www.google.com/search?q=${serachInput.value}`;
    location.href = link;
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", bookmarkSubmit);
}

searchForm.addEventListener("submit", searchSubmit);