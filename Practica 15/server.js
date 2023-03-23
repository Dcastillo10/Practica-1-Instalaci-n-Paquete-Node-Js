const express=require('express');
let app=express();
let PORT = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname +'/public'));

//Si la siguiente linea fuera true, perimitiría objetos anidados
app.use(express.urlencoded({extended: false}));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PRUEBA</title>
    </head>
    <body>
        <h1>HELLO WORLD</h1>
    </body>
    </html>`)
})

//renderizado para el formulario del archivo student.ejs para la obtención de los datos 
app.get('/student',(req,res)=>{
    res.render('student',{nombre: req.params.nombre, edad: req.query.edad, nss: req.query.nss, tipoSangre:req.query.tipoSangre });
});


// El siguiente bloque de codigo se realizó mediante el método send.
// Disponibilidad unicamente para una ruta a la vez
// app.post('/addStudent', function (req,res){
//     res.send(`Nombre: ${req.body.nombre}  edad: ${req.body.edad}  NSS: ${req.body.nss}  Tipo de Sangre: ${req.body.tipoSangre}`)
// });

//En el archivo displayData.ejs se renderizará la información obtenida en student.ejs
app.post('/addStudent', function (req,res){
    res.render('displayData',{
         nombre: req.body.nombre,
         edad: req.body.edad, 
         nss: req.body.nss, 
         tipoSangre: req.body.tipoSangre
    })
});


app.listen(PORT);

