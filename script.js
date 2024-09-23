const container = document.getElementById("container");

for(let i=1; i <= 256; i++){
    const divGrid = document.createElement("div");
    container.appendChild(divGrid);
}

console.log("OK");