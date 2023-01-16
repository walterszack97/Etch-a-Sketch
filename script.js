const container = document.querySelector(".container");
const divRow = document.createElement("div");
const divColumn = document.createElement("div");
const slider = document.querySelector("#gridSize");
const value = document.querySelector("#value");
const blackButton = document.querySelector("#blackBtn")
const whiteButton = document.querySelector("#whiteBtn")
const randomButton = document.querySelector("#randomBtn")

function createDivs(size){
    for (let i = 0; i < size; i++){
        const divColumn = document.createElement("div");
        divColumn.classList.add("divColumn");
        container.appendChild(divColumn);

        //remove divs when changing the slider value so that they dont add up indefinitly
        slider.addEventListener('mousedown', (event) => {
            document.querySelectorAll('.divColumn').forEach(e => e.remove());
        })
        for (let p = 0; p < size; p++){
            const divRow = document.createElement("div");
            divRow.classList.add("divRow");
            divColumn.appendChild(divRow);
            slider.addEventListener('mousedown', (event) => {
                document.querySelectorAll('.divRow').forEach(e => e.remove());
            })
        }
    }
}

value.textContent = slider.value + 'x' + slider.value; //initial value before updating

slider.addEventListener("mouseup", (event) => {
    value.textContent = event.target.value + 'x' + event.target.value;
    createDivs(slider.value);

    document.querySelectorAll(".divRow").forEach((divRow) => {
        divRow.addEventListener("mouseover", function() {
                divRow.style.backgroundColor = color;  
        })
    })
})

slider.addEventListener("input", (event) => {
    value.textContent = event.target.value + 'x' + event.target.value;
})

//initial size when loading page if slider value is at default
if (slider.value == 8){
    createDivs(slider.value);
}

let color = "black";

blackButton.addEventListener("click", (event) => {
    color = "black";
})
whiteButton.addEventListener("click", (event) => {
    color = "white";
})
randomButton.addEventListener("click", (event) => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + randomColor;
})


document.querySelectorAll(".divRow").forEach((divRow) => {
    divRow.addEventListener("mouseover", function() {
       
            divRow.style.backgroundColor = color;
        
    })
})
