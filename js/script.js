// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha
// visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono stati individuati


// Dichiarazioni variabili quantitá numeri da indovinare
// Creazione array dei numeri generati casualmente
// Dichiarazione di punteggio e array numeri indovinati
var quantita = 5;
var arrayNumeriRandom = [];
var punteggio = 0;
var arrayNumeriIndovinati = [];

// Assegnare all'array i numeri casuali
for (var i = 0; i < quantita; i++) {
  arrayNumeriRandom[i] = numeroRandom(1, 100);
}
console.log(arrayNumeriRandom);

// Stampa a schermo dell'array di numeri casuali
alert(arrayNumeriRandom);

// Funzione da attivare dopo 30 secondi
setTimeout(function(){

  // Creazione array di numeri inseriti dall'utente
  var arrayNumeriInseriti = [];
  // Assegnare all'array i numeri casuali
  for (var i = 0; i < quantita; i++) {
    // Inserimento numero dall'utente
    arrayNumeriInseriti[i] = parseInt(prompt('Inserisci il numero:'));
  }

  // Comparazione tra i numeri inseriti e i numeri generati del computer
  // Ciclo array dei numeri inseriti
  for (var i = 0; i < quantita; i++) {
    // Ciclo dell'array dei numeri casuali
    for (var j = 0; j < quantita; j++) {
      // Se il numero inserito é uguale al numero casuale
      if (arrayNumeriInseriti[i] == arrayNumeriRandom[j]) {
        // Aggiungere all'array numeri indovinati il valore e aumentare il punteggio
        arrayNumeriIndovinati[punteggio] = arrayNumeriInseriti[i];
        punteggio++;
      }
    }
  }

  // Stampare a schermo il punteggio e i numeri indovinati
  document.getElementById('punteggio').innerHTML = 'Il tuo punteggio é ' + punteggio + ' su ' + quantita;
  console.log('Il tuo punteggio é ' + punteggio + ' su ' + quantita);
  document.getElementById('numeri').innerHTML = 'I numeri indovinati sono: ' + arrayNumeriIndovinati;
  console.log('I numeri indovinati sono: ' + arrayNumeriIndovinati);

}, 30000);

// ------------------------------ FUNZIONI -------------------------------------

// Funzione che genera numeri casuali da min a max
function numeroRandom(min, max){
  var numero = Math.floor(Math.random() * max + min);
  return numero;
}
