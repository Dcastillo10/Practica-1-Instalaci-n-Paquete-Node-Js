//dependencias
const mongoose = require("mongoose");
const express = require("express");
const personsRoutes = require("./routes/persons");
require("dotenv").config();



mongoose.Promise = global.Promise;
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(personsRoutes);


//Conexión al archivo css y se renombra como /assets
app.use("/assets", express.static(__dirname + "/public"));

//mongo db connection 
//si está conectado imprimirá en consola "CONECTADO A TEST"
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a TEST"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));