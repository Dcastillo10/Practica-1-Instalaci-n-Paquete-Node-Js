const express = require('express')//inyecto dependencia
const app = express()

app.get('/', function (req, res) {//   "/" nombre ruta    y el callback
  res.send('Hello World 222')
})

app.listen(3000) //puerto 3000


//PRIMERO SE EJECUTA EN TERMINAL!!!!!
//APARECE TRABADO PERO NO
