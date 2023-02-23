//var Emiter = require('./emmiter');
var Emiter = require('events');



const  config  = require('./config');//inyeccion de la dependencia

var emtr = new Emiter();

emtr.on(config.events.GREET, () =>{
    console.log('somewhere, someone said hello');
});

emtr.on('greet', () =>{
    console.log('A greeting ocurred');
});

console.log("hello");
emtr.emit('greet')

emtr.on(config.events.JUMP, () =>{
    console.log("someone jumped");
});

console.log(emtr)
emtr.emit('jump');