const powerButton = document.getElementById("buttonOnAndOff");
const lightOn = document.getElementById("lightOn");
const lightOff = document.getElementById("lightOff");

console.log(powerButton);
console.log(lightOn);
console.log(lightOff);

// powerButton.addEventListener("click", function () {
//   lightOn.classList.remove("d-none");
//   lightOn.classList.add("d-block");
// });

powerButton.addEventListener("click", function () {
  if (lightOff.classList.contains("d-inline-block")) {
    lightOff.classList.replace("d-inline-block", "d-none");
    lightOn.classList.replace("d-none", "d-inline-block");
    powerButton.classList.replace("btn-primary", "btn-danger");
  } else {
    lightOff.classList.replace("d-none", "d-inline-block");
    lightOn.classList.replace("d-inline-block", "d-none");
    powerButton.classList.replace("btn-danger", "btn-primary");
  }
});
