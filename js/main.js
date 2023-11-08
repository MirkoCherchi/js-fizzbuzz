'use strict'; 

// # FizzBuzz

// creiamo un ciclo che che stampi in console numeri da 1 a 100,
// ma tutti i numeri multipli di 3 dovranno stampare 'fizz' e tutti
// i numeri multipli di 5 dovranno stampare 'buzz', i numeri
// sia multipli di 3 che di 5 stamperanno 'fizzbuzz'.

// #### BONUS 1

// Crea un container nel DOM , aggiungendo (attraverso la funzione append())
// un elemento html con il numero o la stringa corretta da mostrare.

// #### BONUS 2

// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
// a seconda che il valore inserito sia un numero,
// un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile,
// potresti prendere spunto dallo screenshot fornito in consegna.


for (let conta = 1; conta <= 100; conta++) {
    if (conta % 15 === 0) console.log('FizzBuzz');
    else if (conta % 5 === 0) console.log('Buzz');
    else if (conta % 3 === 0) console.log('Fizz');
    else console.log(conta);    
}
