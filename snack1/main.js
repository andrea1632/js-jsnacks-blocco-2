let numeroInput = parseInt(prompt("inserisci numero")); 
let content = document.getElementById("contenitore");
if (numeroInput % 2 == 0 ){
    content.innerHTML += `${numeroInput}`
} else{
    content.innerHTML += `${numeroInput +1}`
}