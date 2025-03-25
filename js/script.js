const lampadina = document.querySelector("img");
const pulsante =document.getElementById("cambia-scritta")

pulsante.addEventListener("click", function(){
    if(lampadina.src.includes("white_lamp.png")){
        lampadina.src = "./img/yellow_lamp.png";
        pulsante.textContent = "Spegni";
    }
    else{
        lampadina.src = "./img/white_lamp.png";
        pulsante.textContent = "Accendi";
    }

    
})