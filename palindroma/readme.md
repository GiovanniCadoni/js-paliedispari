## Esercizio

**Consegna:**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).

**Dati:**
1. Dobbiamo chiedere all'utente qual è la parola che vuole verificare.

**Procedimento:**
1. Iniziamo scorrendo l'array con la parola dell'utente in modo da poter copiare carattere per carattere la parola invertita in un altro nostro array.
2. Controlliamo, nuovamente scorrendo i due array, se i caratteri che si trovano nella medesima posizione sono gli stessi. Per ogni carattere uguale incrementiamo di uno il valore di una variabile addetta al conto.
3. Verifichiamo se la variabile che ci ha fornito da contatore ha lo stesso valore numerico della lunghezza della stringa che contiene la parola dell'utente.
4. Se sono uguali restituiamo esito positivo, al contrario restituiamo esito negativo.