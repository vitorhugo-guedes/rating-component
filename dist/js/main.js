const rateBtns = document.querySelectorAll("[data-rate]");
const submitBtn = document.querySelector("#submitBtn");
const displayRate = document.querySelector("#displayRate");
const card = document.querySelector("#card");
const thankCard = document.querySelector("#thankCard");

let rate = null;
rateBtns.forEach((rateBtn) => {
  rateBtn.addEventListener("click", () => {
    rate = rateBtn.dataset.rate;
  });
});

submitBtn.addEventListener("click", () => {
  if (rate == undefined) {
    return;
  }
  displayRate.textContent = rate;
  toggleHide();
});

function toggleHide() {
  card.classList.toggle("hide");
  thankCard.classList.toggle("hide");
}
