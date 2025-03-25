/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
// function contaVocali (stringa){
//     let conta = 0;
//     for (let i = 0; i < stringa.length; i++){
//         if ((stringa[i] === `a`) || (stringa[i] === `e`) || (stringa[i] === `i`) || (stringa[i] === `o`) || (stringa[i] === `u`)){
//             conta += 1;
//         }
//     }
//     return conta;
// }
//BONUS
const contaVocali = stringa =>{
    let conta = 0;
    const vocali = [`a`, `e`, `i`, `o`, `u`];
        for (let i = 0; i < stringa.length; i++){
            // if ((stringa[i] === `a`) || (stringa[i] === `e`) || (stringa[i] === `i`) || (stringa[i] === `o`) || (stringa[i] === `u`)){
            //     conta += 1;
            // }
            if (vocali.includes(stringa[i])){
                conta++;
            }
        }
    return conta;
 }

// Invoca la funzione qui e stampa il risultato in console
let nVocali = contaVocali(word);
console.log(`Le vocali nella parola sono: ${nVocali}`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)