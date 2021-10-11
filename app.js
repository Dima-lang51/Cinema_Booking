const schemeSvg = document.querySelector(".scheme__svg");
const totalPriceTag = document.querySelector(".price__total");
const menuButton = document.querySelector(".mobil__menu");
const menu = document.querySelector(".menu");

let cost = 940;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length;
    totalPrice = totalSeats  * cost;
    totalPriceTag.textContent = totalPrice;

  }
});

menuButton.addEventListener('click', () => {
  menu.classList.toggle("is__open");
})