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
    Supereroi?
    Immagina 5 supereroi, ognuno con poteri diversi e ognuno comunica in maniera diversa.

    Numb3r: lui é il supereroe dei numeri, grazie ai suoi poteri puó fare calcoli velocissimi e ricordarsi un sacco di numeri, anche lunghissimi!
    "string": lui é un supereroe molto prolisso, il suo superpotere é confondere tutti con le sue parole e i suoi discorsi, le sa tutte anche perché puó contenere qualsiasi tipo di carattere o cifra
    boolean: lui é il supereroe della veritá, per lui il mondo é solo bianco e nero e esiste solo ció che é VERO e ció che é FALSO
    null: 
    uNd3fiNed: lui é il cattivo, é il caos in persona e non fa altro che creare scompiglio

*/

/* ESERCIZIO 2
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sum = 12 + 20;
console.log("La somma tra 12 e 20 é " + sum);

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log("X é pari a " + x);

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Stefano";
console.log("Il mio nome é " + name);

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log( 4 - x );

/* ESERCIZIO 6
 Crea un oggetto che ti rappresenti.
*/

let person = {
    name: "Stefano",
    surname : "Bernardo",
    hobby: "Photography"
};
console.log(person);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2.toLowerCase());
