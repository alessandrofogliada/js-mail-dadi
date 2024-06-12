
let risultato= document.querySelector(".risultato");
let i = 0;

// Generare un numero random da 1 a 6
//  sia per il giocatore sia per il computer. 

// Genero il lancio dei dadi per l'utente
dadoUtente =(Math.floor(Math.random()*6)+1);

// Genero il lancio dei dadi per il computer
dadoComputer =(Math.floor(Math.random()*6)+1);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// determina le condizioni dell'esito 

if (dadoUtente < dadoComputer) {
  
  console.log(dadoUtente + " e " + dadoComputer + " Il computer vince!"); 
}
else if (dadoUtente > dadoComputer) {
  
  console.log(dadoUtente + " e " + dadoComputer + " L'utente vince!!!");
}
else {
  console.log(dadoUtente + " e " + dadoComputer + " l'utente ed il computer hanno oareggiato");
}


