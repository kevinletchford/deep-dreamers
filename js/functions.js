const sliderTargetButtons = document.querySelectorAll(".target");
const slides = (document = document.querySelectorAll(".slide"));

sliderTargetButtons.forEach((element) => {
  element.addEventListener("click", function () {
    sliderTargetButtons.forEach((el) => el.classList.remove("target_active"));
    slides.forEach((el) => el.classList.remove("slide_active"));
    document
      .querySelector(`#${this.dataset.target}`)
      .classList.add("slide_active");
    this.classList.add("target_active");
  });
});

document.querySelector(".mini-modal-toggle").addEventListener("click", () => {
  document.querySelector(".mini-modal").classList.toggle("mini-modal_active");
});
