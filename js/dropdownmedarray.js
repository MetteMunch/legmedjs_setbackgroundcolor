console.log("Er i ddcolor")

const colArray = ["red", "green", "yellow", "blue", "orange"]
console.log(colArray)

const btnFillDropDown = document.getElementById("pbFillDropDown") //dette er knappen som vi trykker på
console.log(btnFillDropDown)

const selectDropDown = document.getElementById("ddColor") //er dropdown som vi vil fylde med farver

const bdy = document.querySelector("body");
console.log(bdy);


function addColorsToDropDown() {

    selectDropDown.innerHTML = ""// renser dropdown før tilføjelse

    colArray.forEach(color => {
        const el = document.createElement("option") //vi laver et nyt option element til vores dropdown
        el.textContent = color //Teksten i dropdown bliver farvens navn
        selectDropDown.appendChild(el) //tilføjer option elementet til drop-down menuen
    })
    console.log(document.querySelectorAll("*"))
}

function setBackgroundColorWithDD(ev) {
    console.log(ev)
    const selectedColorIndex = selectDropDown.selectedIndex
    console.log("index ", selectedColorIndex)
    const selectedColorOption = selectDropDown.options[selectedColorIndex]
    console.log("option ",selectedColorOption)
    const color = selectedColorOption.innerText
    console.log("color text ", color)
    bdy.style.backgroundColor = color
}

// Listeners

btnFillDropDown.addEventListener("click", addColorsToDropDown)
selectDropDown.addEventListener("change", setBackgroundColorWithDD)