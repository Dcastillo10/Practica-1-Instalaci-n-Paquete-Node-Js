var Emitter = require('./emmiter');

var emtr = new Emitter();

emtr.on('greet', () =>{
    console.log('somewhere, someone said hello');
});

emtr.on('greet', () =>{
    console.log('A greeting ocurred');
});

console.log("hello");
emtr.emit('greet')

emtr.on('jump', () =>{
    console.log("someone jumped");
});

console.log(emtr)
emtr.emit('jump');