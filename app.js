function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("#name").value;
}
function sayAge() {
  document.querySelector("h4").textContent =
    "Du er " + document.querySelector("#age").value + " år";
}
function sayEmail() {
  document.querySelector("h5").textContent =
    "Din email er " + document.querySelector("#email").value;
}
document.querySelector("#nameButton").addEventListener("click", sayHello);
document.querySelector("#ageButton").addEventListener("click", sayAge);
document.querySelector("#emailButton").addEventListener("click", sayEmail);
