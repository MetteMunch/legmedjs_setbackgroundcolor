console.log("er i ddmedobjekter")

const objArray = [{"name":"pink","id":"#ff00fb"},
    {"name":"grey","id":"#7e7a7e"},{"name":"green","id":"#6ebe6a"},{"name":"yellow","id":"#e3e348"}]

const pbFillDropDown3 = document.getElementById("pbFillDropDown3")
console.log(pbFillDropDown3)

const ddColor3 = document.getElementById("ddColor3")
console.log(ddColor3)

function addColorsToDropDown3() {
    ddColor3.innerHTML = "";
    objArray.forEach(fillDropdown3);
    console.log(document.querySelectorAll("*"));
}

function fillDropdown3(item) {
    console.log(item)
    const el = document.createElement("option");
    el.textContent = item.name
    el.value = item.id
    ddColor3.appendChild(el); //Her knytter vi alle elementerne til dropdown html elementet
}

function setBackgroundColorWithDD3(ev) {
    console.log(ev);
    const selectedIndex = ddColor3.selectedIndex;
    console.log(selectedIndex)
    const selectedOption = ddColor3.options[selectedIndex];
    console.log(selectedOption)
    const color = selectedOption.value;
    console.log(color)
    bdy.style.backgroundColor = color;
}

// Listeners

pbFillDropDown3.addEventListener("click", addColorsToDropDown3)
ddColor3.addEventListener("change", setBackgroundColorWithDD3)