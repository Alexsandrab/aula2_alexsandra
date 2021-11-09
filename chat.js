const input = require("readline-sync");

console.log("== olá! Seja bem vindo(a). ==");
const idade = input.question("Qual é a sua idade?");

if (idade>=18 && idade<21){
    console.log("Voce pode entrar mas não pode beber");
}else if (idade>=21){
    console.log("você pode entrar e beber");
}else{
    console.log("Não é permitida sua entrada, pois vc é menor de idade");
}