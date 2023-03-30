//Archivo que será exportado
let express = require('express');//iniciamos express
let router = express.Router(); //Inicializamos el router

router.get('/student',(req,res)=>{
    res.render('student');//en este caso utilizamos render porque es un archivo ejs que renderizará nuestro contenido student
})

module.exports = router;