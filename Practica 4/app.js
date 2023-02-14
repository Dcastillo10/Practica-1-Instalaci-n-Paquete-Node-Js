
let greet = require('./greet');//se convierte en una function expression 
greet();//marcó error porque no se exportó explicitamente
//greet();


//let obj={};
let persona={
    nombre:"Diego", //Key values pairs 
    apellido:"Castillo",
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio:{
        calle: "Madero #144",
        colonia:"Centro",
        cp: "28000",
        municipio:"Colima"
    },

    getAddress: function (){
        return `CALLE: ${this.domicilio.calle} COLONIA: ${this.domicilio.colonia}  CP: ${this.domicilio.cp}  MUNICIPIO: ${this.domicilio.municipio}`;
    }
}

//console.log(persona);
//console.log(persona.nombre);
//console.log(persona.apellido);

console.log(persona.getName());
//console.log(persona.domicilio);
console.log(persona.getAddress());

