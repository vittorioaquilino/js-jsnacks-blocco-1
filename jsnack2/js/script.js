// jsnack2. Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// creo array vuoto
const userList = [];

// chiedo i numeri per 6 volte
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt("dimmi un numero"));
    console.log(userNumber);

    // calcolo il resto e se è dispari lo aggiungo nell'array
    if (userNumber % 2 === 1) {
        userList.push(userNumber);
    }
}

// output
console.log(userList);
