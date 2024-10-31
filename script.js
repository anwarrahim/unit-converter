
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")



convertBtn.addEventListener("click", function(){
   
   
   
    let inputNum =Number(inputEl.value)
    // Conversion length
    if(inputNum!=0) {
        let meterIntoFeet = (inputNum * 3.281).toFixed(3)
        let feetIntoMeter = (3.281 / inputNum).toFixed(3)
        lengthEl.textContent = `${inputNum} meters = ${meterIntoFeet} feets | ${inputNum} feets = ${feetIntoMeter} meters`
        // Conversion length
        let letterIntoGallon = (inputNum * 0.264).toFixed(3)
        let gallonIntoLetter = (0.264 / inputNum).toFixed(3)
        volumeEl.textContent = `${inputNum} liter = ${letterIntoGallon} gallons | ${inputNum} Gallon = ${gallonIntoLetter} liters`
        // Conversion mass
        let kiloIntoPound = (inputNum * 2.204).toFixed(3)
        let poundIntoKilo = (2.204 / inputNum).toFixed(3)
        
        massEl.textContent = `${inputNum} Kilo = ${kiloIntoPound} pounds | ${inputNum} Pound = ${poundIntoKilo} kilos`
    }
    
})



