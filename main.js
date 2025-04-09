const powerButton = document.getElementById("buttonOnAndOff");
const lightOn = document.getElementById("lightOn");

powerButton.addEventListener("click", function () {
  lightOn.classList.remove("d-none");
  lightOn.classList.add("d-block");
});
