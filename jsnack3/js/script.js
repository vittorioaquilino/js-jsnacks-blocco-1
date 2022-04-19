// jsnack3. Calcola la somma e la media dei primi 10 numeri.

// imposto somma e media a 0
let sum = 0;
let middle = 0;

// creo il ciclo con i numeri da 1 a 10
for (let i=1; i <= 10; i++) {
    console.log(i);
    // sommo il numero alla i
    sum = sum + i;
}

// output
console.log("La somma è", sum);
middle = sum / 10;
console.log("La media è", middle);