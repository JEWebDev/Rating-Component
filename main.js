const ratingForm = document.querySelector(".ratingForm");
const numbers = document.querySelectorAll(".number");
const btnSubmit = document.querySelector(".btn-send-rating");
var rating = 0;

btnSubmit.disabled = true;
numbers.forEach((number) => {
  number.addEventListener("click", (e) => validateSelection(e));
});
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  showMessage();
});
ratingForm.addEventListener("onsubmit", (e) => {
  console.log("submited");
});

function validateSelection(e) {
  const numbersArray = Array.from(numbers);
  const selectedRating = e.currentTarget;
  const previouslySelected = numbersArray.find((selected) => {
    return selected.classList.contains("active");
  });

  activateButton();
  if (selectedRating.classList.contains("active")) {
  } else {
    if (previouslySelected) {
      previouslySelected.classList.remove("active");
      selectedRating.classList.add("active");
      rating = selectedRating.textContent;
    } else {
      selectedRating.classList.add("active");
      rating = selectedRating.textContent;
    }
  }
}
function activateButton() {
  btnSubmit.disabled = false;
}

function showMessage() {
  const ratingComponent = document.querySelector(".rating-component");
  const ratingSubmitted = document.querySelector(".rating-submitted");
  const ratingSpan = document.querySelector(".rating");

  ratingSpan.textContent = rating;

  ratingComponent.classList.add("hidden");
  ratingSubmitted.classList.remove("hidden");
}
