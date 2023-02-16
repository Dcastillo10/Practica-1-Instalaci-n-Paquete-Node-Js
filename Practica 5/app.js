let obj={
    nombre:"Carlos",
    edad: 44,
    apellido: "Ulibarri",
    keypress: function (){
        return `se ha presionado una tecla`;
    },
    mouseOver: function(){
        return `el puntero del mouse está arriba`;
    }
}

//console.log(obj.nombre);
//console.log(obj['nombre']);

let myKey='nombre';
console.log(obj[myKey]);//Se llama nombre desde  una variable

myKey='keypress';
//console.log(obj[myKey]());//parentesis extras porque es una función

myKey='mouseOver';
//console.log(obj[myKey]()); //mismo objeto, misma varuable, diferentes funcionalidades


let myArray=[];
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function (){
    console.log("hola desde el array");
})

//console.log(myArray);

//Ahora agrega una línea, para invocar a la función mouseOver que se encuentra en el objeto obj, alojado en la posición 2 del array.
console.log(myArray[2][myKey]());//PRIMERO SE OBTIENE LA POSICIÓN DONDE SE ENCUENTRE NUESTRO OBJETO, DESPUÉS POR MEDIO DE LA VARIABLE MY KEY INVOCAMOS LA FUNCION mouseOVer

let funcArray=[];
funcArray.push(()=>{
    return `function 1`;
});

funcArray.push(()=>{
    return `function 2`;
})

funcArray.push(()=>{
    return `function 3`;
})

funcArray.forEach((item)=>{ //como sabemos que nuestro array contiene funciones, nuestro parametro tendrá paretesis para que se invoque
    console.log(item());//invocación
})