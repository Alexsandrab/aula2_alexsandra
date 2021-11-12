// concatenar 

/*console.log("Hello " + "World");
console.log("Hello" + "World");

myName = "Alexsandra";
console.log("Hello " + myName);

console.log(`Hello ${myName}`)*/

/*const x = 0;
y = "nega mãe";
console.log(x, " \n" + y);*/

//let mes = "dezembro";
const input = require("readline-sync");
const mes = input.question("Digite um mês");

if (mes === "fevereiro"){
    console.log("Tem Carnaval");
}else if (mes === "junho"){
    console.log("Tem São João");
}else if (mes === "dezembro"){
    console.log("Tem natal");
}else{
    console.log(`${mes}, não é um mês festivo`);
}

