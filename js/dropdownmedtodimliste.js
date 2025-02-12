console.log("Er i ddcolor2")

const colArray2 = [["red","#ff0000"], ["green","#4bd24b"],
    ["yellow","#f8f810"], ["purple","#5c3b9f"]]
console.log(colArray2)

const btnFillDropDown2 = document.getElementById("pbFillDropDown2") //dette er forbindelse til knappen som vi trykker på
console.log(btnFillDropDown2)

const selectDropDown2 = document.getElementById("ddColor2") //dette er forbindelsen til dropdown som vi vil fylde med farver
console.log(selectDropDown2)

function addColorsToDropDown2() {
    selectDropDown2.innerHTML = "";
    colArray2.forEach(fillDropdown2);
    console.log(document.querySelectorAll("*"));
}

function fillDropdown2(item) {
    const el = document.createElement("option");
    el.textContent = item[0]; //her angiver vi hvilken text der skal vises i dropdown, og på
    //index 0 er det netop navnet
    el.value = item[1]; //Her gemmer vi værdien i en variabel som benyttes, når farven skal skifte
    selectDropDown2.appendChild(el); //Her knytter vi alle elementerne til dropdown html elementet
}

function setBackgroundColorWithDD2(ev) {
    console.log(ev);
    const selectedIndex = selectDropDown2.selectedIndex;
    const selectedOption = selectDropDown2.options[selectedIndex];
    const color = selectedOption.value;
    bdy.style.backgroundColor = color;
}

// Listeners

btnFillDropDown2.addEventListener("click", addColorsToDropDown2)
selectDropDown2.addEventListener("change", setBackgroundColorWithDD2)
