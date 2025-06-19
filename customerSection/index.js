const cards = document.querySelectorAll(".card");
let current = 0;

function showNextCard() {
  cards[current].classList.remove("active");
  current = (current + 1) % cards.length;
  cards[current].classList.add("active");
}

setInterval(showNextCard, 2000);
