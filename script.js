const scrollButtons = document.querySelectorAll("[data-scroll]");

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const finalMessage = document.getElementById("finalMessage");

yesButton.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  finalMessage.classList.add("show");
});

noButton.addEventListener("click", () => {
  noButton.textContent = "не принимается ♡";

  setTimeout(() => {
    noButton.textContent = "ладно, конечно";
  }, 850);

  setTimeout(() => {
    noButton.textContent = "конечно ♡";
  }, 1900);

  setTimeout(() => {
    yesButton.focus();
  }, 1950);
});
