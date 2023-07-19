let userInput = document.getElementById("userInput")
let userNumber = document.querySelectorAll(".user-number")

// length
let metresToFeet = document.getElementById("metres-feet")
let feetToMetres = document.getElementById("feet-metres")

// volume
let litersToGallons = document.getElementById("liters-gallons")
let gallonsToLiters = document.getElementById("gallons-liters")

// mass
let kilosToPounds = document.getElementById("kilos-pounds")
let poundsToKilos = document.getElementById("pounds-kilos")

function convert() {
    for(let i = 0; i < userNumber.length; i++) {
        userNumber[i].innerHTML = userInput.textContent
    }

    metresToFeet.innerHTML = (userInput.textContent * 3.281).toFixed(3)
    feetToMetres.innerHTML = (userInput.textContent * 0.305).toFixed(3)

    litersToGallons.innerHTML = (userInput.textContent * 0.264).toFixed(3)
    gallonsToLiters.innerHTML = (userInput.textContent * 3.785).toFixed(3)

    kilosToPounds.innerHTML = (userInput.textContent * 2.205).toFixed(3)
    poundsToKilos.innerHTML = (userInput.textContent * 0.454).toFixed(3)
}


function sliderFunction() {
    let inputCheck = document.getElementById("inputCheck")
    let mainContainer = document.querySelector(".main-container")
    let titleText = document.querySelectorAll("h2")
    let unitContainer = document.querySelectorAll(".unit-container")
    let conversionContainer = document.querySelectorAll(".conversion-container")
  
    if(inputCheck.checked == false) {
      mainContainer.classList.toggle("dark-main")
      titleText.forEach(function(item) {item.classList.toggle("dark-title")}) 
      unitContainer.forEach(function(item) {item.classList.toggle("dark-unit")})
      conversionContainer.forEach(function(item) {item.classList.toggle("dark-conversion")})
    } else {
      mainContainer.classList.remove("dark-main")
      titleText.forEach(function(item) {item.classList.remove("dark-title")}) 
      unitContainer.forEach(function(item) {item.classList.remove("dark-unit")})
      conversionContainer.forEach(function(item) {item.classList.remove("dark-conversion")})
    }
}
  