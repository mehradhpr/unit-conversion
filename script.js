// state of the application

// input number
let input_number = 0;

render();

function updateInput() {
  input_number = document.getElementById("input-el").value;
  render();
}

// render function
function render() {
  document.getElementById("input-el").value = input_number;

  document.getElementById("mf-el").textContent = `
  ${input_number} meters = ${meterToFeet(input_number)} feet | ${input_number} feet = ${feetToMeter(input_number)} meters
  `

  document.getElementById("lg-el").textContent =`
  ${input_number} liters = ${litersToGallons(input_number)} gallons | ${input_number} gallons = ${GallonsToLiters(input_number)} liters
  `

  document.getElementById("kp-el").textContent = `
  ${input_number} kilos = ${kilosToPounds(input_number)} pounds | ${input_number} pounds = ${poundsToKilos(input_number)} kilos
  `

}

function meterToFeet(n) {
  return (3.28084 * n).toFixed(3)
}

function feetToMeter(n) {
  return (0.3048 * n).toFixed(3)
}

function litersToGallons(n) {
  return (0.264172 * n).toFixed(3)
}

function GallonsToLiters(n) {
  return (3.78541 * n).toFixed(3)
}

function kilosToPounds(n) {
  return (2.20462 * n).toFixed(3)
}

function poundsToKilos(n) {
  return (0.453592 * n).toFixed(3)
}