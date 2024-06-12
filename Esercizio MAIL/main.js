// chiedi all utente la propria E-Mail 
let container = document.getElementsByClassName(".container")

let emailUtente = document.getElementById("email");

console.log(emailUtente);

// crea tasto per dare l'input 
let tastoConferma = document.querySelector(".tastoconferma")

tastoConferma.addEventListener ("click" ,
    function () {
        let inputValue =emailUtente.value ;
        console.log(inputValue);
    }
)

// crea lista di E-mail idoonee

let esitoEmail = document.querySelector("section");

if (emailUtente === "fogliada.a@gmail.com") {
    esitoEmail.style.backgroundColor = "green";
    esitoEmail.textContent = "idoneo";
} else if (emailUtente !== "fogliada.a@gmail.com") {
    esitoEmail.style.backgroundColor = "red";
    esitoEmail.textContent = "non idoneo";
} else {
    esitoEmail.style.backgroundColor = "blue";
    esitoEmail.textContent = "1";
}

tastoConferma.append(emailUtente);



// confronta la mail inserita dall'utente (if , else)

// dai esito mail all'utente

