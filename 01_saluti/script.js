/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
// function hiUser (stringa) {
//     console.log(`Ciao ${stringa}`);
// }
//BONUS
const hiUser = stringa => console.log(`Ciao ${stringa}`);

// Invoca la funzione qui e stampa il risultato in console
hiUser (userName);


//Risultato atteso se si passa 'Mario': // ciao Mario
