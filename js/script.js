/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numbersToRemember = document.getElementById("numeri");
const time = document.getElementById("tempo");


let number;
let seconds = 30;

// Visualizzare in pagina 5 numeri casuali
for (let i = 0; i < 5; i++){
    number = createRandomNumber();
    console.log(number);
    numbersToRemember.innerHTML += ` ${number} `;
}

// far partire un timer di 30 secondi
const timer = setInterval(
    
    function(){
        time.innerHTML = seconds;
        if(seconds === 0){
            clearInterval(timer);
            numbersToRemember.classList.add("hidden");

        } else{
            seconds--;
            // console.log(seconds);
        }
    }, 1000
)

// dopo 30 secondi i numeri scompaiono 


// l’utente deve inserire, i numeri che ha visto precedentemente

// dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati



// FUNZIONI
// NUMERO CASUALE
function createRandomNumber(){
    return Math.floor(Math.random() * 100 + 1);
}