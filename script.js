//Recupero il riferimento all'area di testo con l'id
const textInput = document.getElementById('text-area')
console.log(localStorage.getItem('user'))

//Creo la variabile KEY che sostituisce la chiave user per salvare il mio utente nel localStorage
const KEY = 'user'

//Carica il testo salvato, se presente
if (KEY){
   user = localStorage.getItem(KEY)
   textInput.value = user
}

const saveButton = document.getElementById('save')

const saveOnClick = function(){
    if (textInput.value === ''){
        alert('Campo vuoto! Inserisci il tuo nome!')
    }
    const textValue = textInput.value
    console.log(textValue)
    localStorage.setItem(KEY, textValue)
    textInput.value = ''
}

const removeOnClick = function(){
    const textValue = textInput.value
    localStorage.removeItem(KEY)
}


//Parte il timer al caricamento della pagina
const TIME = 'elapsed time'

let count

if (TIME){
   const elapsedTime = sessionStorage.getItem(TIME)
   count = Number(elapsedTime)
   console.log(typeof(count))

} else {
    count = 0
}

const timer = function (){
    count += 1
    sessionStorage.setItem(TIME, count)
    document.getElementById('timer').innerHTML = Math.floor(count/60) + 'm ' + count%60 + 's'
}

setInterval(timer, 1000)
