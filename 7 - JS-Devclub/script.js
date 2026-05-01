/* 

document -> HTML

getElementById -> Trás o elemento do HTML que tem o id especificado
getElementsByClassName -> Trás os elementos do HTML que tem a classe especificada
getElementsByTagName -> Trás os elementos do HTML que tem a tag especificada
getElementsByName -> Trás os elementos do HTML que tem o name especificado


querySelector -> Trás o primeiro elemento do HTML que tem a classe, id ou tag especificada
querySelectorAll -> Trás os elementos do HTML que tem a classe, id ou tag especificada
*/

const input = document.getElementById("main-input")
const p = document.getElementsByClassName("paragraph-js")
const h1 = document.getElementsByTagName("h1")
const name = document.getElementsByName("nome-completo")
const element = document.querySelector("p.paragraph-js2")
const elements = document.querySelectorAll("p")

console.log(p)
console.log(input)
console.log(h1)
console.log(name)
console.log(element)
console.log(elements)

const button = document.querySelector(".main-button")

button.style.backgroundColor = "#9de600"

function ButtonClick() {
    document.getElementById("output").innerText = "Você digitou: " + input.value;
}

const select = document.querySelector("select")

select.addEventListener("change", function() {
    document.getElementById("output2").innerText = "Você selecionou: " + select.value;
    if (select.value === "HTML") {select.style.backgroundColor = "#e62600"}
    else if (select.value === "CSS") {select.style.backgroundColor = "#0066e6"}
    else if (select.value === "JavaScript") {select.style.backgroundColor = "#c5c500"}
    else if (select.value === "React") {select.style.backgroundColor = "#00caca"}
    else if (select.value === "Node.js") {select.style.backgroundColor = "#3f883e"}
})