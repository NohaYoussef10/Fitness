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

/*function myFunction() {
  var element = document.getElementById(".cards");
  element.scrollLeft += 50;
}
function myFunctiontwo() {
  var element = document.getElementById(".cards");
  element.scrollright += 50;
}+/
/*const cards = document.querySelector(".cards");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

leftBtn.addEventListener("click", () => {
  cards.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  cards.scrollBy({ left: 300, behavior: "smooth" });
});*/
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelector('.cards');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');
  if (!cards || !leftBtn || !rightBtn) return;

  // read gap (e.g. "20px") and turn into number
  let gap = parseFloat(getComputedStyle(cards).gap) || 0;

  function getCardFullWidth() {
    const first = cards.querySelector('div');
    if (!first) return cards.clientWidth;
    return Math.round(first.offsetWidth + gap);
  }

  function getMaxIndex() {
    return Math.max(0, cards.children.length - 1);
  }

  function getCurrentIndex() {
    const w = getCardFullWidth();
    return Math.round(cards.scrollLeft / w);
  }

  function scrollToIndex(index) {
    const w = getCardFullWidth();
    const max = getMaxIndex();
    const target = Math.max(0, Math.min(index, max));
    cards.scrollTo({ left: target * w, behavior: 'smooth' });
  }

  leftBtn.addEventListener('click', () => scrollToIndex(getCurrentIndex() - 1));
  rightBtn.addEventListener('click', () => scrollToIndex(getCurrentIndex() + 1));

  function updateButtons() {
    const idx = getCurrentIndex();
    const max = getMaxIndex();
    leftBtn.disabled = idx <= 0;
    rightBtn.disabled = idx >= max;
  }

  cards.addEventListener('scroll', () => updateButtons());
  window.addEventListener('resize', () => { gap = parseFloat(getComputedStyle(cards).gap) || 0; updateButtons(); });

  updateButtons();
});
