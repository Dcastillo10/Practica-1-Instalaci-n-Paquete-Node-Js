
//inyección de dependencias 
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let Person = require("../models/persons");


//ROuteo por medio de /gente 
router.get("/gente", async (req, res) => {
  const Persons = await Person.find({});
  //En lugar de usar el res.json se utiliza render porque se renderizará un EJS
  res.render("index", {Persons}); 
});


//routeo para addItem
router.get("/addItem", (req,res) => {
  res.render("addItem");
});

//routeo para editar endpoint update con metodo get
router.get('/findById/:id', (req,res)=>{
  Person.findById(req.params.id).then((myPerson)=>{res.render('personUpdate', {myPerson})}).catch((error)=>{res.json({message:error})});
});

//endpoint con metodo post
router.post('/updatePerson', (req, res)=>{
  Person.findByIdAndUpdate(req.body.objId,{
    nombre: req.body.nombre,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre,
    nss: req.body.nss
  })
  .then((data)=>{res.redirect('/gente')}).catch((error)=>res.json({message:error}));
});

//delete person mismo nombre existente en la etiqueta <a> de index.ejs
router.get('/deletePerson/:id', (req, res)=>{
  Person.findByIdAndDelete(req.params.id)//utilizamos findAndDelete proporcionada por la dependencia de mongoose
  .then((data)=>{res.redirect('/gente')}).catch((error)=>res.json({message:error}));//Al igual que en la practica pasada, esta linea de código NOS REDIRECCIONA a gente si es correcto
  // y si no fuera correcto nos arrojaría un error
})

//mongoDb Schema
router.post("/addItem", function(req, res){
  const newPerson= new Person({
      nombre: req.body.nombre,
      edad: req.body.edad, 
      tipoSangre: req.body.tipoSangre,
      nss: req.body.nss
  })
  newPerson.save().then(() => {res.redirect("/gente")}).catch((error) => {res.json({message:error})}); 
});

module.exports = router;