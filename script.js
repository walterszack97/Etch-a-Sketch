const container = document.querySelector(".container");
const divRow = document.createElement("div");
const divColumn = document.createElement("div");

function createDivs(){
    for (let i = 0; i < 4; i++){
        const divColumn = document.createElement("div");
        divColumn.classList.add("divColumn");
        container.appendChild(divColumn);
        for (let p = 0; p < 4; p++){
            const divRow = document.createElement("div");
            divRow.classList.add("divRow");
            divColumn.appendChild(divRow);
            divRow.textContent = p;
        }
    }
}

createDivs();