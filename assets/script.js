function puter() {
  let action = document.querySelector(".naga");
  action.classList.toggle("active");

  let popOut = document.querySelector(".pop-out");
  popOut.classList.toggle("muncul");

  let darkMode = document.querySelector(".wrapper");
  darkMode.classList.toggle("darkmode");

  let gravity = document.querySelector("div.box1");
  gravity.classList.toggle("gravity");
}
