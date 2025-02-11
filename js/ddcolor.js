const colArray = ["red", "green", "yellow", "blue", "orange"]
console.log(colArray)

const btnFillDropDown = document.getElementById("pbFillDropDown") //dette er knappen som vi trykker på
console.log(btnFillDropDown)

const selectDropDown = document.getElementById("ddColor") //er dropdown som vi vil fylde med farver


function addColorsToDropDown() {

    selectDropDown.innerHTML = ""// renser dropdown før tilføjelse

    colArray.forEach(color => {
        const el = document.createElement("option") //vi laver et nyt option element
        el.textContent = color //Teksten i dropdown bliver farvens navn
        selectDropDown.appendChild(el) //tilføjer option elementet til drop-down menuen
    })
}


btnFillDropDown.addEventListener("click", addColorsToDropDown)
