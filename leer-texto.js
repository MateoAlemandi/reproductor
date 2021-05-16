const texto = document.querySelector('.texto')
const btnLeer = document.querySelector('.btn-leer')


btnLeer.addEventListener('click',()=>{
    const locutor = new SpeechSynthesisUtterance()
    const voz = window.speechSynthesis
    locutor.text = texto.value
    voz.speak(locutor)
})