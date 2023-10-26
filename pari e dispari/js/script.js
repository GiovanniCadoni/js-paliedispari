//Richiamiamo la nostra funzione
let choice = prompt("Cosa scegli? Pari o Dispari?");
choice = choice.toUpperCase();
console.log(choice);
let choiceNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

message = game(choice, choiceNumber);
console.log(message);

alert(message);

function game(choice, choiceNumber)
{
    //Dichiarazione e inizializzazione delle variabili
    let somma = 0;
    let evenOdd = "";
    message = "";

    //Creiamo random il numero del computer
    let numberPc = Math.round(Math.random() * 5 + 1);
    console.log(numberPc);

    //Facciamo la somma
    somma = choiceNumber + numberPc;
    console.log(somma);

    //Verifichiamo se è pari o dispari
    if(somma%2 === 0)
    {
        evenOdd = "PARI";
        console.log(evenOdd);
    } else
    {
        evenOdd = "DISPARI";
        console.log(evenOdd);
    }

    //Ritorniamo il messaggio a seconda del risultato nel controllo precedente 
    if(evenOdd === choice)
    {
        message = `La somma tra il tuo numero (${choiceNumber}) e il numero del computer (${numberPc}) è "${somma}". In base alla tua scelta (${choice}), hai vinto!`
    } else
    {
        message = `La somma tra il tuo numero (${choiceNumber}) e il numero del computer (${numberPc}) è "${somma}". In base alla tua scelta (${choice}), hai perso!`
    }

    return message;

}

