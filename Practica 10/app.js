const express = require('express')//inyecto dependencia
const app = express()
var port=process.env.PORT || 3000;

app.get('/', function (req, res) {//   "/" nombre ruta    y el callback
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>Hello world</h1>
  </body>
  </html>`)
})

app.get('/api', function(req,res){
    res.json({firstname: 'john', lastname:'doe'});
})

app.get('/person/:id',function (req,res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
})


app.listen(port) //puerto 3000