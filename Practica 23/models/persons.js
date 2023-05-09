
//los tipos de datos de objeto json deben coincidir con el objeto que se ingrese en mongo DB atlas
const mongoose = require("mongoose");
let PersonSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  tipoSangre: String,
  nss: String,
});

module.exports = mongoose.model("colecciones", PersonSchema);