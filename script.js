//Recupero il riferimento all'area di testo con l'id
const textInput = document.getElementById('text-area')
console.log(localStorage.getItem('user'))

// Creo la variabile user per salvare il mio utente
const KEY = 'user'

//Carica il testo salvato, se presente
if (KEY){
   user = localStorage.getItem(KEY)
   textInput.value = user
}

const saveButton = document.getElementById('save')

const saveOnClick = function(){
    const textValue = textInput.value
    localStorage.setItem(KEY, textValue)
}

const removeOnClick = function(){
    const textValue = textInput.value
    localStorage.setItem(KEY, textValue)
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
    document.getElementById('timer').innerHTML = count
}

setInterval(timer, 1000)
