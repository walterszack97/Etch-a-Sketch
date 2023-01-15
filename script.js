const container = document.querySelector(".container");
const divRow = document.createElement("div");
const divColumn = document.createElement("div");
const slider = document.querySelector("#gridSize");
const value = document.querySelector("#value");

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
            divRow.addEventListener("mouseover", (event) => {
                divRow.style.backgroundColor = "red";
            })
            slider.addEventListener('mousedown', (event) => {
                document.querySelectorAll('.divRow').forEach(e => e.remove());
            })
        }
    }
}

value.textContent = slider.value + 'x' + slider.value;

slider.addEventListener("mouseup", (event) => {
    value.textContent = event.target.value + 'x' + event.target.value;
    createDivs(slider.value);
})

createDivs(slider.value);

