/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
// function hiUser(user, hour){
//     if (hour >= 0 && hour <= 13){
//         console.log(`Buongiorno ${user}`);
//     } else if (hour > 13 && hour <= 17){
//         console.log(`Buon pomeriggio ${user}`);
//     } else {
//         console.log(`Buonasera ${user}`);
//     }
// }
//BONUS
const hiUser = (user, hour) =>{
    if (hour <= 13){
        console.log(`Buongiorno ${user}`);
    } else if (hour <= 17){
        console.log(`Buon pomeriggio ${user}`);
    } else {
        console.log(`Buonasera ${user}`);
    }
}

// Invoca la funzione qui e stampa il risultato in console
let hours = new Date().getHours();
hiUser (name, hours);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.