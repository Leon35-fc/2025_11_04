//Recupero il riferimento all'area di testo con l'id
const textInput = document.getElementById("text-area");
console.log(localStorage.getItem("user"));

//Creo la variabile KEY che sostituisce la chiave 'user' per salvare il mio utente nel localStorage
const KEY = "user";

//Carica il testo salvato nel localStorage, se presente
if (KEY) {
  user = localStorage.getItem(KEY);
  textInput.value = user;
}

//Salva nel localStorage il testo scritto nell'area di testo
const saveOnClick = function () {
  if (textInput.value === "") {
    //Esce un alert
    // alert('Campo vuoto! Inserisci il tuo nome!')

    //Se l'area di testo è vuota esce un toast che avvisa di inserire del testo
    const toastTrigger = document.getElementById("save");
    const toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap =
      bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  } else {
    //Se l'area non è vuota salva il valore nel localStorage
    const textValue = textInput.value;
    console.log(textValue);
    localStorage.setItem(KEY, textValue);
    textInput.value = "";
  }
};

//Rimuove il testo salvato nel localStorage
const removeOnClick = function () {
  const textValue = textInput.value;
  localStorage.removeItem(KEY);
  textInput.value = "";
  
};

//Parte il timer al caricamento della pagina
const TIME = "elapsed time";

let count;

if (TIME) {
  const elapsedTime = sessionStorage.getItem(TIME);
  count = Number(elapsedTime);
  console.log(typeof count);
} else {
  count = 0;
}

const timer = function () {
  count++;
  sessionStorage.setItem(TIME, count);
  document.getElementById("timer").innerHTML = `Tempo trascorso: ${Math.floor(count / 60)}m ${count % 60}s`;
};

setInterval(timer, 1000);
