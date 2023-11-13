/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
    
    Vedi sotto e sito allegato.

*/

/* ESERCIZIO 2
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*let sum = 12 + 20;
console.log("La somma tra 12 e 20 é " + sum);*/

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*let x = 12;
console.log("X é pari a " + x);*/

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

// let name = "Stefano";
// console.log("Il mio nome é " + name);

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*console.log( 4 - x );*/

/* ESERCIZIO 6
 Crea un oggetto che ti rappresenti.
*/

/*let person = {
    name: "Stefano",
    surname : "Bernardo",
    hobby: "Photography"
};
console.log(person);*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*let name1 = "john";
let name2 = "John";
console.log(name1 === name2.toLowerCase());*/


/* codice buttons*/

function sumFunction() {
    let a = prompt("Dammi il primo numero");
    let b = prompt("Dammi il secondo numero");
    a = parseFloat(a);
    b = parseFloat(b);
    sum = a + b;
    window.alert("La somma di " + a + " e " + b + " é " + sum);
}

function myPhrase() {
    let phrase1 = prompt("Scrivi la prima parte della frase...");
    let phrase2 = prompt("Scrivi la seconda parte della frase...");
    window.alert(phrase1 + " " + phrase2);
}

function checkFunction() {
    let phrase1 = prompt("Prova a scrivere una parola, numero o frase");
    let phrase2 = prompt("Riscrivi la stessa cosa scritta prima");
    window.alert(phrase1 === phrase2);
}

function makeNull() {
    let a = prompt("Scrivi qualsiasi cosa:");
    let check = confirm("Vuoi rendere la variabile nulla?");
    if (check) {
        a = null;
        window.alert("Il valore di a adesso é " + a);
    } else {
        window.alert("Il valore di a é rimasto " + a);
    }
}

function undefinedFunction() {
    let a = prompt("Prova a dirle qualcosa...");
    let b;
    window.alert("Io sono " + b);
}

function myObject() {
    let object = {
        name : prompt("Dimmi il tuo nome"),
        surname : prompt("Dimmi il tuo cognome"),
        age : prompt("Quanti anni hai?")
    }
    window.alert("Il tuo nome é " + object.name + ", il tuo cognome é " + object.surname + " e hai " + object.age + " anni!");
}