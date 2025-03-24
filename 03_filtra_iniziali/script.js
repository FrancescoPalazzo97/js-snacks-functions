/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// function search(arr, x){
//     let nameFound = []; 
//     for (let i = 0; i < arr.length; i++){
//         if (x === arr[i].charAt(0).toLowerCase()){
//             nameFound.push(arr[i]);
//         }
//     }
//     return nameFound;
// }
//BONUS
const search = (arr, x) => {
    let nameFound = []; 
    for (let i = 0; i < arr.length; i++){
        if (x === arr[i].charAt(0).toLowerCase()){
            nameFound.push(arr[i]);
        }
    }
    return nameFound;
}

// Invoca la funzione qui e stampa il risultato in console
let nameToSearh = prompt(`Inserisci il nome da cercare`);
let nameResult = search (names, nameToSearh);
console.log(nameResult);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]