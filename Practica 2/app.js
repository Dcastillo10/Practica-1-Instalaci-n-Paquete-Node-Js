function greet(){
    console.log("Hello ");
}

greet();

function logGreeting(fn){ //La función se usa como parametro
    fn();
}

logGreeting(greet);


console.log(greet)

//function expression
let greetMe = function(){
    console.log("Hello from the function expression"); //esa Variable se convierte en un objeto de tipo funcion, no determina el valor de la variable
}

greetMe(); //Como greetMe se definió como función, puede ser llamada 

//Arrow Function
let greetMeArrow = ()=>{console.log("Hello Arrow")};
greetMeArrow();


let saludo=( nombre, tratamiento)=>{
    console.log("hola " + tratamiento + " " + nombre)
}
saludo("Diego", "Sr.");

//Si el arrow funtion solo tiene un parmetr nos podemos ahorrar los paréntesis
let cuadrado= numero=>{
    return numero*numero;
}

console.log(cuadrado(5));
//También pueden pueden eliminarse los {} y el return
let cuadrado2= numero => numero*numero;