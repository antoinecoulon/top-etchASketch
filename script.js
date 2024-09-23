const container = document.getElementById("container");

for(let i=1; i <= 256; i++){
    const divGrid = document.createElement("div");
    divGrid.className = "divElement";
    container.appendChild(divGrid);
}

const divElement = document.querySelectorAll(".divElement");
divElement.forEach(div => {
    div.addEventListener("mouseover", (event) => {
        div.style.backgroundColor = "blue"; // Modifier le style directement
    });

    // Optionnel : Réinitialiser la couleur lors du "mouseout" (quand la souris quitte l'élément)
    div.addEventListener("mouseout", (event) => {
        div.style.backgroundColor = ""; // Remettre la couleur d'origine
    });
});