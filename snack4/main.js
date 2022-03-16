let primoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let secondoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (i = 0; i < secondoArray.length; i++){
    if (primoArray.length != secondoArray.length){
        primoArray.push(Math.floor(Math.random() * 999))
    }
} console.log(primoArray)
console.log(secondoArray)