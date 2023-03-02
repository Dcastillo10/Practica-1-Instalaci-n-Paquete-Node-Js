const express = require('express')//inyecto dependencia
const app = express()

app.get('/', function (req, res) {//   "/" nombre ruta    y el callback
  res.send('Hello World 123')
})


app.get('/uno', (req,res)=>{
    res.send("Hello World, from route one");
})

app.get('/prueba',(req,res)=>{
    res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PRUEBA</title>
        <style>
        h1{
            color:blue;
        }
        </style>
    </head>
    <body>
        <h1>HELLO WORLD</h1>
    </body>
    </html>`)
})


//PRIMERO SE EJECUTA EN TERMINAL!!!!!
//APARECE TRABADO PERO NO

app.listen(3000) //puerto 3000