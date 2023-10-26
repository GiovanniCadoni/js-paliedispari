
const wordUser = prompt("Qual è la parola da verificare?");
console.log(wordUser, wordUser.length);

const verify = palindrome(wordUser);
alert(verify);

function palindrome(wordUser)
{
    //Dichiarazione e inizializzazione delle variabili
    let reverseWordUser = "";

    let check = 0;
    let message = false;

    let result = "";

    let i;
    let j;

    //Scorriamo la variabile "wordUser" in modo da creare una copia inversa all'interno della variabile "reverseWordUser"
    for(j = wordUser.length - 1; j >= 0; j--)
    {
        reverseWordUser += `${wordUser[j]}`;
    }

    //Scorriamo per controllare se i due array hanno gli stessi caratteri nelle medesime posizioni
    for(i = 0; i < wordUser.length; i++)
    {
        if(reverseWordUser[i] === wordUser[i])
        {
            check++;
        }
    }

    //Controlliamo se i numeri di caratteri uguali corrisponde alla lunghezza della parola stessa
    if(check === wordUser.length){
        message = true;
        result = `Complimenti, la parola che hai scelto è palindroma!`
    } else
    {
        result = `Mi dispiace, la parola che hai scelto non è palindroma.`
    }

    //Restituiamo il nostro risultato come variabile in uscita per la nostra funzione
    return result;

}
