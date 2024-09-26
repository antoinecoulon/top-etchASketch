const container = document.getElementById("container");


// Créer une grille initiale de 16 * 16 (256) div
createGrid(16);

// Appliquer le HOVER à la grille initiale
setDivEvents();

// Bouton et évênement onclick pour une nouvelle grille
const buttonNouvelleGrille = document.getElementById("newGrille");
buttonNouvelleGrille.addEventListener("click", nouvelleGrille);


function nouvelleGrille() {
    // Demander le nombre de cases/div par ligne de la nouvelle grille
    let nombre = parseInt(prompt("Quelle taille de grille ?"), 10);

    // Vérifier si la valeur entrée est un nombre valide
    if (!Number.isInteger(nombre) || nombre <= 0) {
        alert("Veuillez entrer un nombre valide !");
        return;
    }

    // Créer la nouvelle grille avec le nombre de cases par ligne
    createGrid(nombre);
    
}


// Fonction pour créer une grille carrée avec le nombre de cases par ligne spécifié
function createGrid(nombre) {
    // Supprimer l'ancienne grille
    container.innerHTML = '';

    // Calculer la largeur et la hauteur de chaque case en fonction de la taille de la grille
    let caseSize = 100 / nombre; // En pourcentage pour adapter à Flexbox

    // Calculer le nombre total de divs nécessaires
    let totalCases = nombre * nombre;

    // Créer la nouvelle grille
    for (let i = 1; i <= totalCases; i++) {
        const nouvelleGrille = document.createElement("div");
        nouvelleGrille.className = "divElement";
        nouvelleGrille.style.flexBasis = `${caseSize}%`; // Fixer la largeur et hauteur de chaque div
        nouvelleGrille.style.height = `${caseSize}vh`; // Utiliser les unités vh pour que la grille soit carrée
        container.appendChild(nouvelleGrille);
    }
    
    // Appliquer les événements de survol sur la nouvelle grille
    setDivEvents();
}

// Fonction pour ajouter le HOVER
function setDivEvents() {

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

}


