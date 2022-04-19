// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// chiedo all'utente un numero a 4 cifre
let userNumber = parseInt(prompt("Inserisci un numero di 4 cifre"));
console.log("Numero digitato", userNumber);

// i posto la somma a 0
sum = 0;

// inizio un ciclo while per fare la somma delle cifre
while (userNumber) {
    sum += userNumber % 10;
    userNumber = Math.floor(userNumber / 10);
}

// output
console.log("La somma di tutte le cifre è:", sum);