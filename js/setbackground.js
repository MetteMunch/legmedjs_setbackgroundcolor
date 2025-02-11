//Alle variable vil vedblive med at skulle pege på samme felt, så derfor
//er de gjort const og ikke let

const inp = document.querySelector(".inpColor")//her laver vi en
//variabel som kan få fat på og gemme .inpColor værdien
console.log(inp); //disse console.log er nødvendige for at kunne se det
//i consollen under undersøg

const pbCol = document.querySelector(".pbSetColor")
console.log(pbCol);
//pbCol.textContent = "Tryk mig for set color" Denne overskriver tekst fra html

const bdy = document.querySelector("body")
console.log(bdy);

const autoColor = document.querySelector(".autoColor")
console.log(autoColor)

const inpColorPicker = document.getElementById("inpColorPicker")
console.log(inpColorPicker)

const fontButtonIncrease = document.querySelector(".increaseFont")
console.log(fontButtonIncrease)

const fontButtonDecrease = document.querySelector(".decreaseFont")
console.log(fontButtonDecrease)


//Her laver jeg en variabel indeholdende alle pTags fra html
const pTags = document.getElementsByTagName("p")
console.log(pTags)

//Her ændrer jeg pTags til at være i et Array, så det åbner op for nogle funktionelle funktionsmuligheder (ForEach)
const pArray = Array.from(pTags)
console.log(pArray)

function setBackgroundColorWithButton() {
    let color = inp.value //input feltets værdi
    console.log(color)
    bdy.style.backgroundColor = color //hele body skal have den valgte farve
}

function setBackgroundColorAuto() {
    let color = autoColor.value
    bdy.style.backgroundColor = color
}

function setBackgroundColorWithPicker() {
    let color = inpColorPicker.value
    bdy.style.backgroundColor = color
}

function increaseFont() {
    pArray.forEach(p => {
            let oprStyles = window.getComputedStyle(p); // gemmer alle styles fra elementet
            let oprFontSize = parseInt(oprStyles.fontSize); // finder fontsize og Konverter til tal
            console.log("Original font size:", oprFontSize);
            p.style.fontSize = (oprFontSize + 5) + "px"  // Øger fontstørrelsen med 5px
            console.log("New font size:", p.style.fontSize);
        }
    )
}

function decreaseFont() {
    pArray.forEach(p => {
            let oprStyles = window.getComputedStyle(p);
            let oprFontSize = parseInt(oprStyles.fontSize); // Konverter til tal
            console.log("Original font size:", oprFontSize);
            p.style.fontSize = (oprFontSize - 5) + "px"  // formindsker fontstørrelsen med 5px
            console.log("New font size:", p.style.fontSize);
        }
    )
}


//Nedenstående angiver hvilken "event" der skal trigge/starte metoderne

pbCol.addEventListener("click", setBackgroundColorWithButton)
autoColor.addEventListener("keyup", setBackgroundColorAuto)
inpColorPicker.addEventListener("input", setBackgroundColorWithPicker)
fontButtonIncrease.addEventListener("click", increaseFont)
fontButtonDecrease.addEventListener("click", decreaseFont)



