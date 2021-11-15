const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greet = document.querySelector("#hello-greeting");
const editName = document.querySelector("#modify");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleGreeting() {
    const today = new Date();
    let time = today.getHours();

    if (time >= 19) {
        greet.innerHTML = `Good Evening!`;
    } else if (time >= 12) {
        greet.innerHTML = `Good Afternoon!`;
    } else if (time > 0 && time < 6) {
        greet.innerHTML = `Good Morning!`;
    } else {
        greet.innerHTML = `Good Morning!`;
    }
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function handleWriting() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function handleRenaming(event) {
    greeting.classList.add(HIDDEN_CLASSNAME);
    editName.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    handleWriting();
}

function paintGreetings(username) {
    greeting.innerText = `${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    editName.classList.remove(HIDDEN_CLASSNAME);
    editName.addEventListener("click", handleRenaming);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername == null) {
    handleWriting();
} else {
    paintGreetings(saveUsername);
}

handleGreeting()
setInterval(handleGreeting, 1000 * 60);