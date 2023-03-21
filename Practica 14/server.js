const express=require('express');
let app=express();
let PORT = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname +'/public'));

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
        <p>Este es un parrafo y su contenido azul</p>
    </body>
    </html>`)
})

app.get('/person/:id',(req,res)=>{
    res.render('person',{ID: req.params.id, msg: req.query.msg, times: req.query.times});
});

app.listen(PORT);

