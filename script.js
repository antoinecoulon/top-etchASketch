const container = document.getElementById("container");


// Créer une grille initiale de 256 div
for(let i=1; i <= 256; i++){
    const divGrid = document.createElement("div");
    divGrid.className = "divElement";
    container.appendChild(divGrid);
}


// Bouton et évênement onclick pour une nouvelle grille
const buttonNouvelleGrille = document.getElementById("newGrille");
buttonNouvelleGrille.addEventListener("click", nouvelleGrille);


function nouvelleGrille() {
    // Demander le nombre de cases/div de la nouvelle grille
    let nombre = prompt("Quelle taille de grille ?");
    
    // Supprimer l'ancienne grille
    document.querySelectorAll(".divElement").forEach(div => {
        div.remove();
    })
    
    // Créer la nouvelle grille 
    for(let cases = 1; cases <= nombre; cases++) {
        const nouvelleGrille = document.createElement("div");
        nouvelleGrille.className = "divElement";
        container.appendChild(nouvelleGrille);
    }
}

// A FAIRE --> Créer une fonction setDivEvents pour rénitialiser 
// les mouse over etc... voir chat-gpt histo


const divElement = document.querySelectorAll(".divElement");
divElement.forEach(div => {
    div.addEventListener("mouseover", (event) => {
        div.style.backgroundColor = "#eec68b"; // Modifier le style directement
    });

    // Optionnel : Réinitialiser la couleur lors du "mouseout" (quand la souris quitte l'élément)
    div.addEventListener("mouseout", (event) => {
        div.style.backgroundColor = ""; // Remettre la couleur d'origine
    });
});