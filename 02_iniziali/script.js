/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// function firstChar (arr) {
//     let letter = [];
//     for (let i = 0; i < arr.length; i++){
//         letter.push(arr[i].charAt(0));
//     }
//     return letter
// }
//BONUS
const firstChar = arr => {
    let letter = [];
    for (let i = 0; i < arr.length; i++){
        letter.push(arr[i].charAt(0));
    }
    return letter
}

// Invoca la funzione qui e stampa il risultato in console
let firstLetter = firstChar(names);
console.log(firstLetter);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]