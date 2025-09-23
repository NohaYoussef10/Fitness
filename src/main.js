const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelector(".subscribe-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    showAlert("Thanks for subscribing with " + email);
  }
});
function showAlert(message) {
  document.getElementById("alert-message").innerText = message;
  document.getElementById("custom-alert").style.display = "flex"; // Show alert
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none"; // Hide alert
}
document.getElementById("alert-ok").addEventListener("click", closeAlert);

function myFunction() {
  var element = document.getElementById(".cards");
  element.scrollLeft += 50;
}
function myFunctiontwo() {
  var element = document.getElementById(".cards");
  element.scrollright += 50;
}