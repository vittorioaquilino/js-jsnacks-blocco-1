// jsnack1. L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo le due parole
const firstWord = prompt("inserisci la prima parola");
console.log(firstWord);
const secondWord = prompt("inserisci la seconda parola");
console.log(secondWord);

// calcolo la lunghezza delle parole
const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

// controllo qual'è la parola più corta
let result;
if (firstWordLength > secondWordLength) {
    result = `${secondWord} ${firstWord}`;
} else if (secondWordLength > firstWordLength) {
    result = `${firstWord} ${secondWord}`;
} else {
    result = `Le parole hanno la stessa lunghezza, ${firstWord} ${secondWord}`;
}

// output
console.log(result);