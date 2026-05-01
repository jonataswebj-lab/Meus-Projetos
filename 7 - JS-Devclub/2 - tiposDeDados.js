/*
1. String: Representa uma sequência de caracteres. Exemplo: "Olá, mundo!".
2. Number: Representa números, tanto inteiros quanto decimais. Exemplo: 42, 3.14.
3. Boolean: Representa valores verdadeiros ou falsos. Exemplo: true, false.
4. Object: Representa uma coleção de propriedades e métodos. Exemplo: { nome: "Jônatas", idade: 14 }.
5. Null: Representa um valor nulo. Exemplo: null.
6. Undefined: Representa um valor indefinido. Exemplo: let x;
7. Array: Representa uma coleção de elementos. Exemplo: [1, 2, 3].
*/

const texto1 = "texto entre aspas duplas";
const texto2 = 'texto entre aspas simples';
const texto3 = `texto entre crases`;

console.log(texto1);
console.log(texto2);
console.log(texto3);


/*1. String */
const myAge = 14;
const myName = "Jônatas";

const myString = `Minha idade é ${myAge}. E meu nome é ${myName}.`;

console.log(myString);


/*2. Number */
const myNumber = 42 / 2;
const fakeNumber = "42 / 2";

console.log(myNumber);
console.log(fakeNumber);


/*3. Boolean */
const isJavaScriptFun = true;
const isSkyGreen = false;

console.log(isJavaScriptFun);
console.log(isSkyGreen);


/*4. Object */
const person = {
    name: "Jônatas",
    age: 14,
    isStudent: true,
    address: {
        street: "Rua dos Programadores",
        city: "Sorriso",
        state: "MT",
        country: "Brasi",
    }
};

person.age = 15; // Alterando a idade da pessoa

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address.street);


/*5. Null */
const emptyValue = null;
console.log(emptyValue);


/*6. Undefined */
let undefinedValue;
console.log(undefinedValue);


/*7. Array */
const users = [10, 20, 300];
console.log(users[0]); // Acessando o primeiro elemento do array
console.log(users[1]); // Acessando o segundo elemento do array
console.log(users[2]); // Acessando o terceiro elemento do array
console.log(users);