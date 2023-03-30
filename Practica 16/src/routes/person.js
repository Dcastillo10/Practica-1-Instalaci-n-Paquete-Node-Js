//Archivo por exportar person.js
let express = require('express'); //dependencia 

let router = express.Router(); //instalación de router

router.get('/person', (req, res)=>{
    res.send('has solicitado el listado de personas');
})

module.exports=router;