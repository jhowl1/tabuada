var numero0 = document.querySelector("#numero0")
var numero1 = document.querySelector("#numero1")
var btnSomar = document.querySelector("#somarResultado")
var subtrair = document.querySelector("#subtrairResultado")
var multiplicar = document.querySelector("#multiplicarResultado")
var dividir = document.querySelector("#dividirResultado")
var resultado = document.querySelector("#resultado")

btnSomar.addEventListener("click", soma)
subtrair.addEventListener("click", subtrai)
multiplicar.addEventListener("click", multiplica)
dividir.addEventListener("click",dividi)

function soma(){
    resultado.innerText = Number(numero0.value) + Number(numero1.value)
}
function subtrai(){
    resultado.innerText = Number(numero0.value) - Number(numero1.value)
}
function multiplica(){
    resultado.innerText = Number(numero0.value) * Number(numero1.value)
}
function dividi(){
    resultado.innerText = Number(numero0.value) / Number(numero1.value)
}