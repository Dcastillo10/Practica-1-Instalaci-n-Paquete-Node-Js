
let greet= require('./greet1');
//let greet2=require('./greet2').greet;

let greet2a=require('./greet2');

greet();
//greet2();
greet2a.greet();

//Modulo que expone un objeto construido
const greet3= require('./greet3');
console.log(greet3);//Se imprime todo el constructor
greet3.greet();//llama la función greet

greet3.greeting="Hello from the app";
let greet3b = require('./greet3');//El require es una refenrencia de MEMORIA, no de VALOR
greet3b.greet();

//modulo que expone un constructor 
const Greet4=require('./greet4');//constructor
let myGreet= new (Greet4);
myGreet.greet();

const greet5 = require('./greet5');
greet5.greet();
greet5.jump();
greet5.code();
greet5.shout();
greet5.talk();