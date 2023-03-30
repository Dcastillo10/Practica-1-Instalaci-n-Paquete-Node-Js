let express=require('express'); //Inyección express
let app=express(); //Servidor
let PORT = process.env.PORT || 3000; //Puerto de escuchaaa


//Si la siguiente linea fuera true, perimitiría objetos anidados
app.use(express.urlencoded({extended: false}));


let personsRoute = require('./routes/person'); //routeo de persons
let studentsRoute = require('./routes/student');//routeo de student
let addStudent = require('./routes/addStudent');//routeo de addStudent 


app.set('view engine', 'ejs');

//LLAMADAS A LAS DIFERENTE DIRECCIONES
app.use(personsRoute);
app.use(studentsRoute);
app.use(addStudent);

app.use('/assets', express.static(__dirname + '/public')); //css



app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000');
})



