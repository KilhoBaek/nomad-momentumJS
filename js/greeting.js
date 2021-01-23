const form = document.querySelector(".js-form");
const inForm = form.querySelector("input");
const greets = document.querySelector(".js-greetings");
const greet = greets.querySelector("h4");
const inBtn = greets.querySelector("input");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";


function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greets.classList.add(SHOWING_CN);
  greet.innerHTML = `Have a nice day, ${text}!`;
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = inForm.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function delName() {
  localStorage.removeItem(USER_LS);
}

function removeGreeting() {
  greets.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
}

function handleRemove(event) {
  event.preventDefault();

  inForm.value = null;
  removeGreeting();
  delName();
}


function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }

  inBtn.addEventListener("click", handleRemove);
}

function init() {
  loadName();
}

init();
