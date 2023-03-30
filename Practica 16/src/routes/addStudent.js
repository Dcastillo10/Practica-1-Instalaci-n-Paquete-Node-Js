//Archivo addStudent a exportar
let express = require('express');
let router = express.Router();

//A diferencia de student, aquí debemos usar otro request method. En este caso será POST
router.post('/addStudent', (req, res)=>{
    //RECORDEMOS QUE "displayData" ES EL NOMBRE DEL ARCHIVO EJS 
    res.render('displayData', { nombre: req.body.nombre,
                                edad: req.body.edad,
                                nss: req.body.nss,
                                tipoSangre: req.body.tipoSangre});
}); 

module.exports = router;