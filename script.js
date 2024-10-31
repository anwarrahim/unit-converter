
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")


convertBtn.addEventListener("click", function(){
    let inputNum =Number(inputEl.value)
    console.log(inputNum)
    console.log(typeof inputNum)
})


