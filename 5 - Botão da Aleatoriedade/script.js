const botao = document.querySelector(".botao")
const contador = document.querySelector("#contador")

let cliques = 0
let fugir = false

botao.addEventListener("click", function () {

cliques++
contador.innerText = "Cliques: " + cliques

if(cliques == 25){
alert("🎉 EVENTO SECRETO DESBLOQUEADO VOCÊ APERTOU 25 VEZES!")

document.body.style.background = "gold"
botao.style.width = "400px"
botao.style.height = "400px"
}

if(cliques == 40){
alert("😈 EVENTO SECRETO: O BOTÃO VAI FUGIR!")

botao.style.position = "absolute"
fugir = true
}

if(cliques == 41){
alert("😢 Você clicou no botão e ele ficou cansado de fugir...")

fugir = false

botao.style.left = "50%"
botao.style.top = "50%"
botao.style.transform = "translate(-50%, -50%)"

botao.innerText = "😢 botão triste"
}

if(cliques == 42){
alert("😢 O botão ficou triste...")
}

if(cliques == 45){
alert("🙂 Foi bom enquanto durou...")
}

if(cliques == 46){
alert("🙂 Espero que você fique bem...")
}

if(cliques == 47){
alert("🙂 Gostei do tempo que passamos juntos...")
}

if(cliques == 48){
alert("🙂 Não se preocupe comigo...")
}

if(cliques == 49){
alert("😢 Adeus...")
}

if(cliques == 50){
alert("👋 O botão infelizmente foi embora para sempre...")

botao.style.display = "none"

document.body.innerHTML += "<h2 style='color:white'>O botão foi embora... 😢</h2>"
}

let numero = Math.floor(Math.random() * 42)

if(cliques == 50){
document.body.style.background = "gold"
botao.style.width = "400px"
botao.style.height = "400px"
}

if(numero == 0){
alert("🍕 Você ganhou uma pizza!")
}

if(numero == 1){
alert("📚 Vai Estudar!")
}

if(numero == 2){
alert("💀 Você Perdeu!")
}

if(numero == 3){
alert("💰 Você Ganhou R$10.000! (é mentira)")
}

if(numero == 4){
alert("🎮 Vai jogar um jogo!")
}

if(numero == 5){
alert("🍔 Hora de comer alguma coisa!")
}

if(numero == 6){
alert("😴 Hora de dormir!")
}

if(numero == 7){
alert("🚿 Vai tomar banho!")
}

if(numero == 8){
alert("🤔 Quanto e a raiz de 144?")
}

if(numero == 9){
alert("🐱 Você ganhou um gato!")
}

if(numero == 10){
botao.style.width = "25px"
botao.style.height = "25px"
}

if(numero == 11){
botao.style.width = "50px"
botao.style.height = "50px"
}

if(numero == 12){
botao.style.width = "100px"
botao.style.height = "100px"
}

if(numero == 13){
botao.style.width = "250px"
botao.style.height = "250px"
}

if(numero == 14){
botao.style.width = "250px"
botao.style.height = "400px"
}

if(numero == 15){
botao.style.width = "400px"
botao.style.height = "250px"
}

if(numero == 16){
botao.style.width = "500px"
botao.style.height = "500px"
}

if(numero == 17){
botao.style.width = "750px"
botao.style.height = "750px"
}

if(numero == 18){
botao.style.width = "1000px"
botao.style.height = "1000px"
}

if(numero == 19){
document.body.style.background = "red"
}
  
if(numero == 20){
document.body.style.background = "orange"
}

if(numero == 21){
document.body.style.background = "yellow"
}

if(numero == 22){
document.body.style.background = "lightgreen"
}

if(numero == 23){
document.body.style.background = "green"
}

if(numero == 24){
document.body.style.background = "blue"
}

if(numero == 25){
document.body.style.background = "lightblue"
}

if(numero == 26){
document.body.style.background = "pink"
}

if(numero == 27){
document.body.style.background = "purple"
}

if(numero == 28){
document.body.style.background = "black"
}

if(numero == 29){
document.body.style.background = "white"
}

if(numero == 30){
botao.style.background = "red"
}

if(numero == 31){
document.body.style.background = "orange"
}

if(numero == 32){
botao.style.background = "yellow"
}

if(numero == 33){
botao.style.background = "lightgreen"
}

if(numero == 34){
botao.style.background = "green"
}

if(numero == 35){
botao.style.background = "blue"
}

if(numero == 36){
botao.style.background = "lightblue"
}

if(numero == 37){
botao.style.background = "pink"
}

if(numero == 38){
botao.style.background = "purple"
}

if(numero == 39){
botao.style.background = "black"
}

if(numero == 40){
botao.style.background = "white"
}

}  
);

document.addEventListener("mousemove", function(){

if(fugir){

botao.style.left = Math.random() * 90 + "%"
botao.style.top = Math.random() * 90 + "%"

}

})