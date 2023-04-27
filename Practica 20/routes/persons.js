
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

module.exports = router;