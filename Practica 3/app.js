//Continuación pratica anterior

function greet(){
    console.log("Hello")
}

let logGreeting = (miParametro) => miParametro();
logGreeting(greet);

//funcion creada al vuelo
//Variable qure recibe una función 
let logGreeting2 = (miParametro)=> miParametro();

logGreeting2(function(){
    console.log("Hello from a function created on the fly");
})

//Nueva nomenclatura
let color="rojo";
let talla="m";
let modelo="clasico"

console.log("Juan tiene una playera talla " + talla + " de color " + color + modelo);
console.log(`Juan tiene una playera ${talla} de color ${color} ${modelo}`);