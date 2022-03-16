let content = document.getElementById("contenitore");
let numeriInt = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];
console.log(numeriInt);
let somma = 0;
let snitch = false;
for (i = 1; i < numeriInt.length; i++){
    if(i % 2 != 0){
       snitch = true
       somma += numeriInt[i]
    }
}
console.log(somma)
content.innerHTML += `la somma è ${somma}`