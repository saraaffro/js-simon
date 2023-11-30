/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numbersToRemember = document.getElementById("numeri");
const time = document.getElementById("tempo");


let numbers = [];
let seconds = 30;
let guessNumber;
let guessNumberArray = [];

// Visualizzare in pagina 5 numeri casuali
for (let i = 0; i < 5; i++){
    randomNumber = createRandomNumber();
    numbers.push(randomNumber);
}
numbersToRemember.innerHTML = "Numeri: " + numbers.join(", ");

// far partire un timer di 30 secondi
const timer = setInterval(
    
    function(){
        time.innerHTML = seconds;
        if(seconds === 0){
            clearInterval(timer);
            // dopo 30 secondi i numeri scompaiono
            numbersToRemember.classList.add("hidden");
            for (let i= 0; i < 5; i++){
                // l’utente deve inserire, i numeri che ha visto precedentemente
                guessNumber = parseInt(prompt("Inserisci uno dei numeri che hai visto prima"));
                guessNumberArray.push(guessNumber);
                
                if(numbers.includes(guessNumberArray[i])){
                    console.log(`Hai indovinato il numero: ${guessNumberArray[i]}`);
                } else{
                    console.log(`Il numero ${guessNumberArray[i]} è sbagliato`);
                }
            }
            console.log("I numeri che hai scritto tu sono: ", guessNumberArray);
            console.log(`I numeri da indovinare erano: ${numbers}`);
        } else{
            seconds--;
            // console.log(seconds);
        }
    }, 500
)




// dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati



// FUNZIONI
// NUMERO CASUALE
function createRandomNumber(){
    return Math.floor(Math.random() * 100 + 1);
}